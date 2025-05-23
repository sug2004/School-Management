import express from 'express'
import { getSchools, createSchool } from '../controllers/schoolController.js'

const router = express.Router()

router.get('/listSchools', getSchools)
router.post('/addSchool', createSchool)

export default router
