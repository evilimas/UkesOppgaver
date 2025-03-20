import { fromDate, toDate } from "../index";

export default class ValidateTimeComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement("div");
      const divValid = document.createElement("div");
      divValid.classList.add("validate");
      divValid.setAttribute("id", "validate");
      div.appendChild(divValid);
      
      document.body.addEventListener("click", async () =>
        fromDate.checkDateIsValid(
          `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`
        ) &&
        toDate.checkDateIsValid(`${toDate.Day} ${toDate.Month} ${toDate.Year}`)
          ? (divValid.textContent = `Date is valid`)
          : (divValid.textContent = `Date is NOT valid!!!!`)
      );
      this.appendChild(div);
    });
  }
}
