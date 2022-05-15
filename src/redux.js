import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo", 
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
      ], 
      // tous ces reducteur, recevront l'état initial et ce qu'on leur demande de faire dans mes fonctions 
      reducers: {
          // qu'est ce qu'une action ? un object avec deux information, le nom de l'action, et les données dont on va voir besoin, on appel ça le payload
          // { type : "AJOUTER", payload : "faire le menage"}

          // pour state et  action : parce qu'on recoit la copie du state actuel et qu'ensuite on y fait une action
          
          addTask: (state, action) => {
                // {type : "ADD_TASK", payload : "aller faire à manger" }
                 // {type : "todo/addTask", payload : "aller faire à manger" }
            const newTask = {
                id : Date.now()  ,
                done : false, 
                text : action.payload
            }
            state.push(newTask)
          },
          toggleTask: (state, action) => {
              // {type : "toogle_task", payload : 20 }
              // {type : "todo/toogleTask", payload : 20 }
              const task = state.find(t => t.id === action.payload ); // je récupère l'id du paylad, et je cherche ma task correspondante
              task.done = !task.done // j'inverse l'info qui y est à l'interieur
          },
          deleteTask: (state, action) => {
            // {type : "DELETE_TASK", payload : 20 }
            // {type : "toto/deleteTask", payload : 20 }
            // étant donné qu'on ne touche jamais à l'état actuel, on fait un nouveau tableau ou l'on remet tout ce qu'on avait au prélable sauf celui que je décide de supprimer
            state = state.filter(t => t.id !== action.payload);
            return state ;
          },
      }
})

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

export const store = configureStore({
    reducer : {
        todo: todoSlice.reducer
    }
})
