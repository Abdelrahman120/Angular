import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  @Input() tasks: { text: string; completed: boolean }[] = [];
  @Output() toggleTaskEvent = new EventEmitter<number>();
  @Output() deleteTaskEvent = new EventEmitter<number>();

  toggleTask(index: number) {
    this.toggleTaskEvent.emit(index);
  }
  deleteTask(index: number) {
    this.deleteTaskEvent.emit(index);
  }
}
