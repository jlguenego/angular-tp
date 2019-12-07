import { Component, OnInit } from '@angular/core';
import { ReferenceService } from 'src/app/services/reference.service';
import { Reference } from 'src/app/interfaces/reference';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public reference: ReferenceService, private router: Router) {}

  ngOnInit() {}

  select(r: Reference) {
    this.reference.setCurrentRef(r);
    this.router.navigateByUrl('/sell-ref/sell');
  }
}
