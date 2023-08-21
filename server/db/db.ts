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