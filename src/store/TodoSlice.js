import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

const initialValue = [{
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true
    },
    {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false
    },
]

export const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos]
        }
    },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) =>
                {
                    return todo.id !== action.payload
                } )
        },

        completedTodo: (state, action) => {
            state.todos = state.todos.map( ( todo ) =>
            {
                if ( todo.id === action.payload )
                {
                    todo.completed = !todo.completed
                }
                return todo
            } )
        }
    })

export const { addTodo, deleteTodo, completedTodo } = TodoSlice.actions
export default TodoSlice.reducer