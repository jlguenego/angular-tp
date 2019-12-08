import { Injectable } from '@angular/core';
import { Reference } from '../interfaces/reference';

@Injectable({
  providedIn: 'root',
})
export class ReferenceService {
  references = this.getReferences();
  currentRef = this.getCurrentRef();
  constructor() {}

  async add(ref: Reference) {
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

  setCurrentRef(r: Reference) {
    this.currentRef = r;
    this.saveRef();
  }

  getCurrentRef(): Reference {
    const str = localStorage.getItem('currentRef');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str) as Reference;
  }

  saveRef() {
    localStorage.setItem('currentRef', JSON.stringify(this.currentRef));
  }

  sell(sellQuantity: number) {
    this.currentRef.quantity -= sellQuantity;
    this.saveRef();
    this.save();
  }
}
