const { Router } = require('express');
const { getTodosHandler } = require('../handlers/todosHandlers')


const todosRouter = Router();

todosRouter.get("/", getTodosHandler); 


module.exports = todosRouter;