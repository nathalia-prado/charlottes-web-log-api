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

export default router
