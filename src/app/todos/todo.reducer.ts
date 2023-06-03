import { createReducer, on } from '@ngrx/store';
import { add, borrar, borrarCompletados, editar, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState:Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Robar escudo del Capitan America"),
];

const _todoReducer = createReducer(
  initialState,
  on(add, (state,{texto}) => [...state,new Todo(texto)]),
  on(borrar, (state,{id}) => state.filter(todo=> todo.id !== id)),
  on(borrarCompletados, (state) => state.filter(todo=>todo.completado==false)),
  
  on(toggleAll, (state,{completado}) => state.map(todo => {
    return {
      ...todo,
      completado:completado
    }
  })),
  
  on(toggle, (state,{id}) => {
    return state.map(todo =>{
      let salida:Todo;

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