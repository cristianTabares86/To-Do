const { apiTodos } = require('../controllers/todosController')

const getTodosHandler = async (req, res) => {
    try {
        let resultSearch = await apiTodos();
        console.log(resultSearch);
        
            return res.status(200).send(resultSearch);
    } catch (error) {
        res.status(400).send("Error -->  " + error);
    }
};

module.exports =
{
    getTodosHandler,
};

