import { Component } from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrls: ['./to-do-wrapper.component.css'],
})
export class ToDoWrapperComponent {
  tasks: Task[] = [];

  addTask(newTask: string) {
    if (newTask.trim()) {
      this.tasks.push({ text: newTask, completed: false });
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
