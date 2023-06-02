import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @ViewChild('inputFisico') textInputFisico:ElementRef;

  chkCompletado: FormControl;
  inputText: FormControl;
  editando:boolean=false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(
  ): void {

    this.chkCompletado = new FormControl(this.todo.completado);
    this.inputText = new FormControl(this.todo.texto,Validators.required);

    this.chkCompletado.valueChanges.subscribe( () => {
      this.store.dispatch(actions.toggle({id:this.todo.id}));
    })


  }

  editar(){
    this.editando=true;


    setTimeout(()=>{
      this.textInputFisico.nativeElement.select();
    },1)
  }

  update(){
    this.editando=false;
    if(this.inputText.invalid) return;
    if(this.inputText.value === this.todo.texto) return;

    this.store.dispatch(actions.editar({
      id:this.todo.id,
      texto:this.inputText.value
    }))
  }

  borrar(){
    this.store.dispatch(actions.borrar({id:this.todo.id}));
  }

}
