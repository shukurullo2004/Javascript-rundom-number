let name = prompt('ismingizni kiriting')
alert(`Hurmatli ${name}, Meliboev Shukurulloning Javascriptdagi ilk loyihasidan foydalanganingiz uchun tashakkur`)
const randomNumber = (min, max) => {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generating = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if(min == 0 || max == 0){
        alert('iltimos yaroqli raqam kiriting')
        return 0;
    }
    if(min > max){
        alert(`hurmatli ${name}, iltimos min sonini max sonidan kichik qiymatda kiriting`)
        return 0;
    }

    placeholder = document.querySelector('#placeholder')
    placeholder.textContent =randomNumber(min,max)
}
const button = document.getElementById('generate')
button.addEventListener('click',generating)