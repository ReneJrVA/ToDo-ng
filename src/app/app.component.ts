import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: string[] = [];
  currentTodo = '';

  addTodo(): void {
    this.todoList.push(this.currentTodo);
    this.currentTodo = '';
  }
  deleteTodo(i: number): void {
    this.todoList.splice(i, 1);
  }
}
