import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list', 
  templateUrl: './todo-list.component.html', 
  styleUrls: ['./todo-list.component.css'] 
})
export class TodoListComponent {
  tasks: { title: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask() {
 
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
    
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
