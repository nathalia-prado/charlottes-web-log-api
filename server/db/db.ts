import { Post } from '../../models/post.ts'
import db from './connection.ts'

export function getAllPosts(): Promise<Post[]> {
  return db('posts').select()
}

export function addPost(post: Post): Promise<Post> {
  return db('posts')
    .insert({title: post.title, text: post.text, date_created: new Date().getTime()})
    .returning(['id','title','date_created as dateCreated', 'text'])
}

export function updatePost(post: Post): Promise<Post> {
  return db('posts').update(post).where('id', post.id)
  .returning(['id','title','date_created as dateCreated', 'text'])
}

export function deletePost(id: number): Promise<number> {
  return db('posts').delete().where({id})
}

export function getAllComments(id: number): Promise<Comment[]> {
  return db('comments').select().where({post_id: id})
}