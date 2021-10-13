import Router from 'express'
import taskController from "./taskController.js";
import cors from 'cors'


const router = new Router();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}


router.post('/tasks', cors(corsOptions), taskController.create); // Создание таски
router.get('/tasks', cors(corsOptions), taskController.getAll); // Получить все таски
router.get('/tasks/:id', cors(corsOptions), taskController.getOne); // Получить таску по айдишнику
router.get('/tasks/:day', cors(corsOptions), taskController.getDayTasks); // Таски за определенный день
router.get('/tasks/:status', cors(corsOptions), taskController.getStatusTasks); // Таски по определенному статусу
router.put('/tasks', cors(corsOptions), taskController.editTask); // Редактировать таску
router.delete('/tasks/:id', cors(corsOptions), taskController.deleteTask); // Удалить таску

export default router;

