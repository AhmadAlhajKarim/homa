import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
('');
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  error: boolean = false;
  succeeded: boolean = null;

  constructor(private builder: FormBuilder) {
    this.FormData = this.builder.group({
      user_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  sendEmail(e: Event) {
    this.succeeded = null;
    if (this.FormData.invalid) {
      for (const i in this.FormData.controls) {
        this.FormData.controls[i].markAsDirty();
        this.FormData.controls[i].updateValueAndValidity();
      }
    } else if (this.FormData.valid) {
      e.preventDefault();
      emailjs
        .sendForm(
          environment.SERVICE_ID,
          environment.TEMPLATE_ID,
          e.target as HTMLFormElement,
          environment.USER_ID
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            if (result.text === 'OK') {
              this.succeeded = true;
              this.FormData.reset();
            }
          },
          (error) => {
            this.succeeded = false;
            this.error = error.text;
            console.log(error.text);
          }
        );
    }
  }
}
