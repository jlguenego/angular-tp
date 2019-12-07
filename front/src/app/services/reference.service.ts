import { Injectable } from '@angular/core';
import { Reference } from '../interfaces/reference';

@Injectable({
  providedIn: 'root',
})
export class ReferenceService {
  references = this.getReferences();
  constructor() {}

  add(ref: Reference) {
    this.references.push(ref);
    this.save();
  }

  getReferences(): Reference[] {
    const str = localStorage.getItem('references');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Reference[];
  }

  save() {
    localStorage.setItem('references', JSON.stringify(this.references));
  }
}
