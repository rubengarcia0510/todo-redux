import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';


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

  constructor() { }

  ngOnInit(
  ): void {

    this.chkCompletado = new FormControl(this.todo.completado);
    this.inputText = new FormControl(this.todo.texto,Validators.required);


  }

  editar(){
    this.editando=true;


    setTimeout(()=>{
      this.textInputFisico.nativeElement.select();
    },1)
  }

  update(){
    this.editando=false;
  }

}
