import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css'],
})
export class ToDoFormComponent {
  newTask: string = '';

  @Output() addTaskEvent = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim()) {
      this.addTaskEvent.emit(this.newTask);
      this.newTask = '';
    }
  }
}
