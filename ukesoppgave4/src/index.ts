
import { DateComponent } from "./components/Date-component";
import FromTimeComponent from "./components/From-component";
import ToTimeComponent from "./components/To-component";
import ValidateTimeComponent from "./components/Validate-date";

let fromDate = new DateComponent(1, 1, 2022);
let toDate = new DateComponent(31,12,2030)
window.customElements.define('dato-from-component', FromTimeComponent)
window.customElements.define('dato-to-component', ToTimeComponent)
window.customElements.define('validate-component', ValidateTimeComponent)

export { fromDate, toDate }