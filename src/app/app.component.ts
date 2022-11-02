import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  toDoList: ToDo[] = [
    {
      task:'Mow the yard.',
      completed: false
    },
    {
      task: 'Do the laundry.',
      completed: false
    },
    {
      task: 'Walk the dog.',
      completed: false
    },
    {
      task: 'Do the dishes',
      completed: true
    },
    {
      task: 'Do homework',
      completed: false
    }
  ]

  completeTask(task:ToDo){
    task.completed = true;
  }

  incompleteTask(task:ToDo){
    task.completed = false; 
  }

  removeTask(i : number){
    this.toDoList.splice(i, 1)
  }

    addTask(formParam: NgForm): void {
      let newTask: ToDo = {
        task: formParam.form.value.todo,
        completed: false
      };
      this.toDoList.push(newTask);
  }
}
