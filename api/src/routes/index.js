const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const type = require('./typesRouter');
const todos = require('./todosRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/types', type);
router.use('/todos', todos);


module.exports = router;
