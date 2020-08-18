import express from 'express'
import getListRoutes from './list'

export default function getRoutes() {
  const router = express.Router()

  router.use('/lists', getListRoutes())

  return router
}
