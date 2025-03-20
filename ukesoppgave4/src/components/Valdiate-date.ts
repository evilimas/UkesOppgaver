import { fromDate, toDate } from "../index";

export default class ValidateTimeComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const fromIsValid = fromDate.checkDateIsValid(
        `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`
      );
      const divValid = document.createElement("div");
      divValid.classList.add("validate");
      divValid.setAttribute("id", "validate");
      if (fromIsValid) {
        divValid.textContent = `<h2>From date is valid</h2>`;
      } else {
        divValid.textContent = `<h2>From date is NOT valid!!!!</h2>`;
      }
      document.querySelector('.validate')?.addEventListener('onchange', () => console.log('hello'))
    });
  }
}
