import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReferenceService } from './reference.service';
import { Reference } from '../interfaces/reference';

@Injectable({
  providedIn: 'root',
})
export class HttpReferenceService extends ReferenceService {
  constructor(private http: HttpClient) {
    super();
    console.log('http reference');
    this.refresh();
  }

  refresh() {
    this.http.get<Reference[]>('./ws/references').subscribe(references => {
      console.log('get successfull');
      this.references = references;
      this.save();
    });
  }

  add(ref: Reference) {
    this.http.post<Reference>('./ws/references', ref).subscribe(reference => {
      console.log('post successfull');
      this.refresh();
    });
  }
}
