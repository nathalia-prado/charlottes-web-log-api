import express from 'express'
const router = express.Router()
import * as db from '../db/db'

router.get('/', async (req, res) => {
    const posts = await db.getAllPosts()
    res.json(posts)
  })

router.post('/', async(req, res) => {
    const post = await db.addPost(req.body)
    res.json(post) 
})

router.patch('/:id', async(req, res) => {
    const updatedPost = req.body
    updatedPost.id = req.params.id
    const post = await db.updatePost(updatedPost)
    res.json(post)
})

export default router
