import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactsComponent, FormInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule { }
