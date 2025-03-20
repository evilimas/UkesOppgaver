// import YearComponent from './components/Year-component';
// import MonthComponent from './components/Month-component';
// import DayComponent from './components/Day-component';


// window.customElements.define('dato-from-component', YearComponent);
// window.customElements.define('month-component', MonthComponent);
// window.customElements.define('day-component', DayComponent);

import { DateComponent } from "./components/Date-component";
import FromTimeComponent from "./components/From-component";
let date = new DateComponent(1, 1, 2022);
window.customElements.define('dato-from-component', FromTimeComponent)

export { date }