import { Component, OnInit } from '@angular/core';
import { faDizzy } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  faDizzy = faDizzy;

  constructor() { }

  ngOnInit() {
  }

}
