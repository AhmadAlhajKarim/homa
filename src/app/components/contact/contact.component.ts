import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  error: boolean = false;
  succeeded: boolean | undefined;

  constructor(private builder: FormBuilder) {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  onSubmit(FormData: FormData) {}
}
