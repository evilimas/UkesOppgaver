// import { month } from "./Month-component";
import { DateComponent } from "./Date-component";

let date = new DateComponent(1, 1, 2022);
export default class FromTimeComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement("div");

      const divDay = document.createElement("div");
      divDay.classList.add("day");
      divDay.setAttribute("id", "day");
      divDay.textContent = `${date.Day}`;

      const divBtns = document.createElement("div");
      divBtns.classList.add("day1");

      const btnUp = document.createElement("button");
      btnUp.classList.add("day-up");
      btnUp.textContent = "▲";

      const btnDown = document.createElement("button");
      btnDown.classList.add("day-down");
      btnDown.textContent = "▼";

      divBtns.appendChild(btnUp);
      divBtns.appendChild(btnDown);
      div.appendChild(divDay);
      div.appendChild(divBtns);

      this.appendChild(div);

      const dayUpButton = div.querySelector(".day-up");
      const dayDownButton = div.querySelector(".day-down");
      dayUpButton?.addEventListener("click", () => {
        date.Day++
        divDay.textContent = date.Day.toString()
        console.log(date.Day)
        // if (date.Day >= 31) {
        //   date.Day = 1;
        // } else if (date.Day >= 28 && date.Month == 2) {
        //   date.Month++;
        //   date.Day = 1;
        // } else {
        //   date.Day++;
        //   divDay.textContent = date.Day.toString();
        //   date.makeDateString(date.Day, date.Month, date.Year);
        //   if (date.checkDateIsValid(date.DateString))
        // }
      });

      dayDownButton?.addEventListener("click", () => {
        date.countDown(date.Day)
        divDay.textContent = date.Day.toString()
        // if (day <= 1) {
        //   day = 31;
        // }
        // day--;
        // divDay.textContent = day.toString();
      });
    });
  }
}
