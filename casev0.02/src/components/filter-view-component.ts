import state from '../model/state';
export default (filterName: string) => {
  if (filterName == 'Kurs') {
    return createKursHtml();
  } else if (filterName == 'Dato') {
    return createDatoHtml();
  } else if (filterName == 'Hendelser') {
    return createEventHtml();
  }
};

function createKursHtml() {
  let html = '';
  for (let kurs of state.courseAddedEvents) {
    html += `
        <label>
        <input type="checkbox" value="${kurs.name}" />
        ${kurs.name}
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
            <input type="date"/ value='${currentDate.toLocaleDateString('sv')}'>
        </label>
        <label>Til Dato:
            <input type="date"/ value='${toDate.toLocaleDateString('sv')}'>
        </label>
        <select name="semester" id="semester">
            <option>Hurtigvalg Semester</option>
            Dummy - semester is not a type
        </select>`;
  return html;
}

function createEventHtml() {
  let html = '';
  const filterArray = ["applied","approved","started","droppedOut","completed", "Payment"]
  for (let filter of filterArray ) {
    html += /*HTML*/ `
    <label>
    <input type="checkbox" value="${filter}" />
    ${filter}
    </label>
    `;
  }
  return html;
}

// function getSemesters() {
//   let html = '';
//   for (let semester of model.semester) {
//     html += `<option>${semester.name}</option>`;
//   }
//   return html;
// }
