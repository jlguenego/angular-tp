import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  f = new FormGroup({
    label: new FormControl('Tournevis', Validators.required),
    category: new FormControl('Outils', Validators.required),
    quantity: new FormControl(34, Validators.required),
    price: new FormControl(3.2),
  });
  constructor(private router: Router) {}

  ngOnInit() {}

  submit() {
    this.router.navigateByUrl('/add-stock/success');
  }
}
