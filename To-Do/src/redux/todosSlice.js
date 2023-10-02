import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTodos: [],
    dataTodo: {},
}


export const TodosSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getAllTodos: (state, action) => {
            state.allTodos = action.payload
        },
        todoMsgErr: (state, action) => {
            state.dataTodo = action.payload
        },
    }
})

export const { getAllTodos, todoMsgErr } = TodosSlice.actions

export default TodosSlice.reducer