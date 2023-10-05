import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await db.getAllPosts()
    res.json(posts)
})

router.post('/', async(req, res) => {
    const posts = await db.addPost(req.body)
    res.json(posts[0]) 
})

router.patch('/:id', async(req, res) => {
    const updatedPost = req.body
    updatedPost.id = req.params.id
    const posts = await db.updatePost(updatedPost)
    res.json(posts[0])
})

router.delete('/:id', async(req, res) => {
    await db.deletePost(Number(req.params.id))
    res.sendStatus(200)
})

router.get('/:id/comments', async (req, res) => {
    const comments = await db.getAllComments(Number(req.params.id))
    res.json(comments)
})

router.post('/:id/comments', async (req, res) => {
    const newComment = {postId: Number(req.params.id), comment: req.body.comment}
    const comments = await db.addComment(newComment)
    res.json(comments[0])
})


export default router
