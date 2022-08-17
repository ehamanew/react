import {createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import _ from "lodash"

const initialState= {

    tasks:[],
}

function reducer(state=initialState, action) {
    switch (action.type) {
        case 'GET_TASKS':
            return {...state,tasks:action.tasks};
        case 'TOGGLE_TASK':
            const tasksToUpdate=Object.values({...state.tasks});
           // console.log(tasksToUpdate);
            let index = _.findIndex(state.tasks,function(t){
               
               return t.id === action.id
            });
           // console.log(index)
           // console.log(tasksToUpdate[index])
             tasksToUpdate[index].reminder= !tasksToUpdate[index].reminder;
           // console.log(tasksToUpdate);
            return {...state, tasks:tasksToUpdate}
        case 'DELETE_TASK':
          // const taskToremove=Object.values({...state.tasks});
           let indexOf=_.remove(state.tasks, function(t){
            return t.id === action.id
           })
            return  {...state,tasks:indexOf};
        case 'ADD_TASK':
            let oldTasks=state.tasks;

            oldTasks.push(action.data)
            return {...state, tasks:oldTasks}


        default:
            return state;

      }
}

export const store= createStore(reducer,composeWithDevTools())