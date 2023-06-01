import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as actions from '../todo.actions'
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {


  txtInput:FormControl;

  constructor(private store:Store<AppState>) { 
    this.txtInput = new FormControl('',Validators.required)
  }

  ngOnInit(): void {
  }

  agregar() {
    if(this.txtInput.invalid) { return }
    this.store.dispatch(actions.add({texto:this.txtInput.value}))
    
    this.txtInput.reset();
  }

}
