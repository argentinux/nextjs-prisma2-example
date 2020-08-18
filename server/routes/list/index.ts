import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function getListRoutes() {
  const router = express.Router()

  // /api/lists   :GET ALL LISTS
  router.get('/', async (_req, res) => {
    const lists = await prisma.list.findMany()
    res.json(lists)
  })

  // /api/lists/:id  :GET ONE LIST BY ID with all todos
  router.get('/:id', async (req, res) => {
    const { id } = req.params
    const list = await prisma.list.findOne({
      where: {
        id: Number(id),
      },
      include: {
        todos: true,
      },
    })
    res.json(list)
  })

  return router
}
