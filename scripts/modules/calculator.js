export default function initCalc() {
    const repair = document.querySelectorAll('input[name="repair_type"]');
    const area = document.getElementById('area-range');
    const areaValue = document.getElementById('area-value');
    const discount = document.querySelector('.calc-info-item:last-child p');

    function calculate() {
        let price = 0;

        if (document.querySelector('input[value="cosmetic"]:checked')) {
            price = 2500;
        }

        if (document.querySelector('input[value="capital"]:checked')) {
            price = 4500;
        }

        if (document.querySelector('input[value="turnkey"]:checked')) {
            price = 6500;
        }

        if (document.querySelector('input[value="designer"]:checked')) {
            price = 9000;
        }

        areaValue.textContent = area.value;

        const total = price * Number(area.value);
        const sale = Math.round(total * 0.1);

        discount.textContent = sale.toLocaleString('ru-RU') + ' руб.';
    }

    repair.forEach(item => {
        item.addEventListener('change', calculate);
    });

    area.addEventListener('input', calculate);

    calculate();
}