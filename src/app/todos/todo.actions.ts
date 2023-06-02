import { createAction, props } from '@ngrx/store';

export const add = createAction('[TODO] Add',props<{texto:string}>());

export const toggle = createAction('[TODO] Toggle',props<{id:number}>());