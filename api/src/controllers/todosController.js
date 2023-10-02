//const axios = require('axios');
const { URL_API, LOT_LIMIT } = process.env;



const apiTodos = async () => {
    try {
        const response = await fetch('https://dummyjson.com/todos?limit=5&skip=0');
        if (!response.ok) {
            throw new Error('The API request could not be completed successfully.');
        }

        const data = await response.json();
        const arrayTodosApi = data.todos;

        return arrayTodosApi;
    } catch (error) {
        throw error;
    }
};




module.exports =
{
    apiTodos,
}
