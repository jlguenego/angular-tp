import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  f: FormGroup;
  constructor(
    public reference: ReferenceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.f = this.fb.group({
      sellQuantity: [1, Validators.required],
    });
  }

  ngOnInit() {}

  submit() {
    this.reference.sell(this.f.value.sellQuantity as number);
    this.router.navigateByUrl('/sell-ref/success');
  }
}
