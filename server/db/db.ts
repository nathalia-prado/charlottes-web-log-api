import { CommentData, Comment } from '../../models/comment.ts'
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

export async function deletePost(id: number): Promise<number> {
  await deleteCommentByPostId(id)
  return db('posts').delete().where({id})
}

export function getAllComments(id: number): Promise<Comment[]> {
  return db('comments').select().where({post_id: id})
}

export function addComment(commentData: CommentData): Promise<Comment> {
  return db('comments')
    .insert({comment: commentData.comment, post_id: commentData.postId, date_posted: new Date().getTime()})
    .returning(['id','comment','date_posted as datePosted', 'post_id as postId'])
}

export function updateComment(comment: Comment): Promise<Comment> {
  return db('comments').update({comment: comment.comment}).where('id', comment.id)
  .returning(['id','comment','date_posted as datePosted', 'post_id as postId'])

}

export function deleteComment(id: number): Promise<number> {
  return db('comments').delete().where({id})
}

export function deleteCommentByPostId(id: number): Promise<number> {
  return db('comments').delete().where({post_id: id})
}