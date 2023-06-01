import { createReducer, on } from '@ngrx/store';
import { add } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState:Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Robar escudo del Capitan America"),
];

const _todoReducer = createReducer(
  initialState,
  on(add, (state,{texto}) => [...state,new Todo(texto)])
);

export function todoReducer(state,action){
    return _todoReducer(state,action);
}