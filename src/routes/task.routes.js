import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, deleteTask, createTask, updateTask } from '../dao/managers/task.manager.js'
import { createTaskSchema } from '../schemas/task.schema.js'
import { validateSchema } from '../middlewares/validaitorSchema.js'
const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/task/:id', authRequired, getTask)
router.post('/task', authRequired, validateSchema(createTaskSchema), createTask)
router.delete('/task/:id', authRequired, deleteTask)
router.put('/task/:id', authRequired, updateTask)

export default router