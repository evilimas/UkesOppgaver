import { fromDate, toDate } from "../index";

// export default class ValidateTimeComponent extends HTMLElement {
//   connectedCallback() {
//     window.requestAnimationFrame(() => {
//       // const fromIsValid = fromDate.checkDateIsValid(
//       //   `${fromDate.Day} ${fromDate.Month} ${fromDate.Year}`
//       // );
//       // const toIsValid = toDate.checkDateIsValid(
//       //   `${toDate.Day} ${toDate.Month} ${toDate.Year}`
//       // );
//       const div = document.createElement("div");
//       const divValid = document.createElement("div");
//       divValid.classList.add("validate");
//       divValid.setAttribute("id", "validate");
//       div.appendChild(divValid);
      
//       document.body.addEventListener("click", async () =>
//         fromDate.checkDateIsValid(
//           `${fromDate.Month} ${fromDate.Day} ${fromDate.Year}`
//         ) &&
//         toDate.checkDateIsValid(`${toDate.Month} ${toDate.Day} ${toDate.Year}`)
//           ? (divValid.textContent = `Date is valid`)
//           : (divValid.textContent = `Date is NOT valid!!!!`)
//       );
//       this.appendChild(div);
//     });
//   }
// }


export default class ValidateTimeComponent extends HTMLElement {
    connectedCallback() {
        window.requestAnimationFrame(() => {
            const div = document.createElement("div");
            const divValid = document.createElement("div");
            divValid.classList.add("validate");
            divValid.setAttribute("id", "validate");
            div.appendChild(divValid);
            
            document.body.addEventListener("click", async () => {
                const fromIsValid = fromDate.checkDateIsValid(fromDate.Day, fromDate.Month, fromDate.Year);
                const toIsValid = toDate.checkDateIsValid(toDate.Day, toDate.Month, toDate.Year);
                
                divValid.textContent = fromIsValid && toIsValid ? `Date is valid` : `Date is NOT valid!!!!`;
            });
            this.appendChild(div);
        });
    }
}
