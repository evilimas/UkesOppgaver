// import model from './model.ts';
// import { clickedNumber } from './controller.ts';

// function updateView() : void {
//     let numbers = '';
//     for (let i = 0; i < model.numbers.length; i++) {
//         let number = model.numbers[i] || '';
//         numbers += /*HTML*/`<div>${number}</div>`;
//     }
//     document.getElementById('app')!.innerHTML = /*HTML*/`
//         <div class="grid">
//             ${numbers}
//         </div>
//         <div class="info">Antall trekk: ${model.count}</div>
//     `;
//     const numberDivs = document.querySelectorAll('.grid div');
//     for (let i = 0; i < numberDivs.length; i++) {
//         const numberDiv = numberDivs[i];
//         numberDiv.addEventListener('click', () => clickedNumber(i));
//     }
// }

// export default updateView;
