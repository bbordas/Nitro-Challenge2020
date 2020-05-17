import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.less']
})
export class PostEditComponent implements OnInit {
  @Input() data;
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;

  constructor() {}

  ngOnInit() {}

  onEdit() {
    this.edit.emit(this.data);
  }
}
