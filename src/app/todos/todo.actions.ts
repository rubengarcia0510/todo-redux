import { createAction, props } from '@ngrx/store';

export const add = createAction('[TODO] Add',props<{texto:string}>());

export const toggle = createAction('[TODO] Toggle',props<{id:number}>());

export const editar = createAction('[TODO] Edit',props<{id:number,texto:string}>());

export const borrar = createAction('[TODO] Borrar',props<{id:number}>());