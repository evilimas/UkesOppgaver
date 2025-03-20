import { month } from "./Month-component";
let day = 1;
let dayMonth = month

export default class DayComponent extends HTMLElement {
  connectedCallback() {
    window.requestAnimationFrame(() => {
      const div = document.createElement("div");

      const divDay = document.createElement("div");
      divDay.classList.add("day");
      divDay.setAttribute("id", "day");
      divDay.textContent = `${day}`;

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
        if (day >= 31){
            day = 1
        }
        else if (day >= 28 && dayMonth == 2) {
            dayMonth++
            day = 1;
        } else {
          day++;
          divDay.textContent = day.toString();
        }
      });

      dayDownButton?.addEventListener("click", () => {
        if (day <= 1) {
          day = 31;
        }
        day--;
        divDay.textContent = day.toString();
      });
    });
  }
}
