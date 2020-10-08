import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormData } from 'src/app/models/form-data.model';




@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Output('onSubmit') submit = new EventEmitter<FormData>();
  inputForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      search: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.submit.emit(this.inputForm.value)
  }

}
