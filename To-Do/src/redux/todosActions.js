import axios from "axios";
import { getAllTodos, todoMsgErr } from '../redux/todosSlice'


export const getTodosApi = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/todos`
        );
  
        const dataTodos = response.data;
  
        if (dataTodos) {
          dispatch(getAllTodos(dataTodos));
        } else {
          dispatch(todoMsgErr("No Todo registration"));
        }
      } catch (error) {
        console.log(`Error: ${error}`);
        dispatch(todoMsgErr(error));
      }
    };
  };

  export const updateListTodos = (listTodos) => {
    return async (dispatch) => {
        try {
          if (listTodos) {
            dispatch(getAllTodos(listTodos));
          } else {
            dispatch(todoMsgErr("No Todos registration"));
          }
        } catch (error) {
          console.log(`Error: ${error}`);
          dispatch(todoMsgErr(error));
        }
      };
  };