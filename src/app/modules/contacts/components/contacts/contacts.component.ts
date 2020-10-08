import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormData } from 'src/app/models/form-data.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  inputForm: FormGroup;
  userDetails: FormData;
  constructor() { }

  ngOnInit() {

  }

  onSubmit(event: FormData) {
    console.log(event);
    this.userDetails = event;
  }
}
