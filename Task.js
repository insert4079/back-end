import mongoose from "mongoose";

const Task = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true}, // to be done / done
    priority: {type: String, required: false}, // low / medium / high / the highest
    category: {type: String, required: false},
    creationTime: {type: String, required: false},
    deadline: {type: String, required: false}
});

export default mongoose.model('Task', Task);
