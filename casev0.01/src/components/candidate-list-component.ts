import type { Candidate } from '../model/types';

export default class Student extends HTMLElement {
  connectedCallback() {
    const candidateJson: string = this.getAttribute('candidate') ?? '{}';
    const candidate: Candidate = JSON.parse(candidateJson);
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
      
      `;
    });
  }
}
