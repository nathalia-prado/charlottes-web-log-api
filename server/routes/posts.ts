import express from 'express'
import * as db from '../db/db'

const router = express.Router()

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

router.delete('/:id', async(req, res) => {
    await db.deletePost(Number(req.params.id))
    res.sendStatus(200)
})

router.get('/:id/comments', async (req, res) => {
    const comments = await db.getAllComments(Number(req.params.id))
    res.json(comments)
})

export default router
