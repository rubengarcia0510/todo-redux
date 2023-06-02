import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual:string='todos';
  filtros:string[]=['todos','completados','pendientes']

  pendientes:number=0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('filtro')
              .subscribe(filtro => {
                this.filtroActual = filtro;
              })
    this.store.subscribe(store=>{
      this.filtroActual = store.filtro;
      this.pendientes = store.todos.filter(todo=>!todo.completado).length;
    })
  }

  cambiarFiltro(filtro){
    this.filtroActual=filtro;

    this.store.dispatch(actions.setFiltro({filtro:filtro}))
  }

}
