export default class Filter extends HTMLElement {
  btns: NodeListOf<HTMLButtonElement>;
  filterName!: string;
  constructor() {
    super();
   
    this.btns = document.querySelectorAll('button') 
  }
  private openFilter(filterName: Event): HTMLElement {};
  

  connectedCallback() {
    // this.btns = document.querySelectorAll('button') 
    // const btns = this.querySelectorAll('button');
   
    
    // this.addEventListener('click', this.openFilter(event, city));
    this.innerHTML = `
            <div class="tab">
                <button class="tablinks">London</button>
                <button class="tablinks">Paris</button>
                <button class="tablinks">Tokyo</button>
            </div>

            <div id="London" class="tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" class="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p> 
            </div>

            <div id="Tokyo" class="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>
    `;
    document.querySelectorAll('.tablinks').forEach((btn) => { 
        btn.addEventListener('click', (event) =>
          this.openFilter(event, btn.getAttribute('data-city'))
        );
    console.log(this.btns)
    
  }
}
