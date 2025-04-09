import { AppState, CourseUpdateEvent } from "../model/types";

export default (filterName: string, state: AppState) => {
  if (filterName == 'Kurs') {
    return createKursHtml(state.courseAddedEvents);
  } else if (filterName == 'Dato') {
    return createDatoHtml();
  } else if (filterName == 'Hendelser') {
    return createEventHtml();
  }
};

function createKursHtml(courses: CourseUpdateEvent[]) {
  let html = '';
  for (let course of courses) {
    html += `
        <label>
        <input type="checkbox" value='${JSON.stringify(course).replace(
          '"',
          '"'
        )}' />
        ${course.name}
        </label>
        `;
  }
  return html;
}

function createDatoHtml() {
  let currentDate = new Date();
  let toDate = new Date(currentDate.getTime() + 60 * 60 * 24 * 1000);
  let html = /*HTML*/ `
        <label>Fra Dato:
            <input type="date" value='${currentDate.toLocaleDateString('sv')}'>
        </label>
        <label>Til Dato:
            <input type="date" value='${toDate.toLocaleDateString('sv')}'>
        </label>
        <select name="semester" id="semester">
            <option>Hurtigvalg Semester</option>
            Dummy - semester is not a type
        </select>`;
  return html;
}

function createEventHtml() {
  let html = '';
  const filterArray = [
    'applied',
    'approved',
    'started',
    'droppedOut',
    'completed',
    'Payment',
  ];
  for (let filter of filterArray) {
    html += /*HTML*/ `
    <label>
    <input type="checkbox" value="${filter}" />
    ${filter}
    </label>
    `;
  }
  return html;
}