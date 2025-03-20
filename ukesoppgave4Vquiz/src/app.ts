import { FromToComponent }  from "./components/fromTo-component";

customElements.define("fromto-container", FromToComponent);

document.addEventListener('load', () => { console.log('Hello')})