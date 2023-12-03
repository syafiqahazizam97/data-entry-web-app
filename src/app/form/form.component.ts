import {Output, Input,Component, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() projects: any = {};
  @Output() onSubmit = new EventEmitter<any>();


  onFormSubmit() {
    this.onSubmit.emit(this.projects);
  }
}
