import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  f: FormGroup;
  constructor(public reference: ReferenceService, private fb: FormBuilder) {
    this.f = this.fb.group({
      sellQuantity: [1, Validators.required],
    });
  }

  ngOnInit() {}
}
