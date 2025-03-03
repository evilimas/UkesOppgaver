function updateView() {
    let numbers = '';
    for (let i = 0; i < model.numbers.length; i++) {
        let number = model.numbers[i] || '';
        numbers += /*HTML*/`<div onclick="clickedNumber(${i});">${number}</div>`;
    }
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="grid">
            ${numbers}
        </div>
        <div>Antall trekk: ${model.count}</div>
    `;
}
