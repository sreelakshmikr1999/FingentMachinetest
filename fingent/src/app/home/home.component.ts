import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[0-9a-zA-Z.]*')]],
    email: ['', [Validators.required, Validators.email]],
    ph: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10)]],
  })
  constructor(private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
      this.router.navigateByUrl("userlist")
    }
    else {
      alert("Invalid Form");
    }
  }
}
