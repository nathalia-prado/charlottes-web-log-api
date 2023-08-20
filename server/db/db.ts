import { Post } from '../../models/post.ts'
import db from './connection.ts'

export function getAllPosts(): Promise<Post[]> {
    return db('posts').select()
  }
