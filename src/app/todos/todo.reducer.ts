import { createReducer, on } from '@ngrx/store';
import { add, editar, toggle } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState:Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Robar escudo del Capitan America"),
];

const _todoReducer = createReducer(
  initialState,
  on(add, (state,{texto}) => [...state,new Todo(texto)]),
  on(toggle, (state,{id}) => {
    return state.map(todo =>{
      let salida:Todo;
      console.log(todo.id+" == "+id)
      if(todo.id === id){
        
        salida={
          ...todo,
          completado:!todo.completado
        }

      }else{
        salida=todo;
      }

      return salida;

    })
  }),
  on(editar, (state,{id, texto}) => {
    return state.map(todo =>{
      let salida:Todo;
      console.log(todo.id+" == "+id)
      if(todo.id === id){
        
        salida={
          ...todo,
          texto: texto
        }

      }else{ 
        salida=todo;
      }

      return salida;

    })
  })
);

export function todoReducer(state,action){
    return _todoReducer(state,action);
}