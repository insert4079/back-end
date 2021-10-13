import Task from "./Task.js";

class taskController {
    async create(req, res) {
        try {
            const {name, description, status, priority} = req.body;
            const task = await Task.create({name, description, status, priority});
            res.json(task);
        } catch (e) {
            res.json(e);
        }
    }

    async getAll(req, res) {
        // res.set('Access-Control-Allow-Origin', '*')
        try {
            const tasks = await Task.find();
            return res.json(tasks);
        } catch (e) {
            res.json(e);
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'id не указан'})
            }
            const task = await Task.findById(id);
            return res.json(task);
        } catch (e) {
            res.json(e);
        }
    }

    async getDayTasks(req, res) {
        try {

        } catch (e) {
            res.json(e);
        }
    }

    async getStatusTasks(req, res) {
        try {

        } catch (e) {
            res.json(e);
        }
    }

    async editTask(req, res) {
        try {
            const task = req.body;
            if (!task._id) {
                res.status(400).json({message: 'id не указан'})
            }
            const updatedTask = await Task.findByIdAndUpdate(task._id, task, {new: true});
            return res.json(updatedTask);
        } catch (e) {
            res.json(e);
        }
    }

    async deleteTask(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'id не указан'})
            }
            const task = await Task.findByIdAndDelete(id);
            return res.json(task);
        } catch (e) {
            res.json(e);
        }
    }
}


export default new taskController();
