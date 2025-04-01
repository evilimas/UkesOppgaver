export default class Student extends HTMLElement {
  // get countdown() {
  //   return this.getAttribute('countdown') || DEFAULT_COUNTDOWN;
  // }

  // set countdown(value) {
  //   this.setAttribute('countdown', value);
  // }

  //   attributeChangedCallback(name, oldValue, newValue) {
  //     if (!this.value) {
  //       return;
  //     }

  //     if (name === 'color') {
  //       this.div.style.color = newValue;
  //     }
  //   }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.innerHTML = /*HTML*/ `
      
      `;
      //   const div = document.createElement('div');
      //   div.classList.add('countdown-container');
      //   const p = document.createElement('p');
      //   p.textContent = 'Nedtelling til hendelse:';
      //   const countDiv = document.createElement('div');
      //   countDiv.classList.add('countdown');
      //   countDiv.textContent = '00:00:00';
      //   const btn = document.createElement('button');
      //   btn.textContent = `Start ${this.countdown} sek`;
      //   btn.addEventListener('click', () =>
      //     startCountdown(parseInt(this.countdown), countDiv)
      //   );
      //   div.appendChild(p);
      //   div.appendChild(countDiv);
      //   div.appendChild(btn);
      //   this.appendChild(div);
    });
  }
}
