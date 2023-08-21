import express from 'express'
import * as db from '../db/db'

// eslint-disable-next-line no-unused-vars

const router = express.Router()

router.patch('/:id', async(req, res) => {
    const updatedComment = req.body
    updatedComment.id = req.params.id
    const comment = await db.updateComment(updatedComment)
    res.json(comment)
})

router.delete('/:id', async(req, res) => {
    await db.deleteComment(Number(req.params.id))
    res.sendStatus(200)
})

export default router
