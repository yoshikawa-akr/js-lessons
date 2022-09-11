const showBtn = document.getElementById('js-show-btn');
const modal = document.getElementById('js-modal');
const closeBtn = document.getElementById('js-close-btn');
const submitBtn = document.getElementById('js-submit-btn');

showBtn.addEventListener('click', () => {
    modal.classList.add('show');
    showBtn.classList.add('hide');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    showBtn.classList.remove('hide');
});

// submitを押したらinput値を取得し、モーダルを閉じる
// モーダル閉じたらinput値を初期化
// 値が入力されていない場合はアラート
submitBtn.addEventListener('click', () => {
    const inputNumber = document.getElementById('js-input-number').value;
    const inputText = document.getElementById('js-input-text').value;
    if (inputNumber == '' || inputText == '') {
        alert('未入力のフォームがあります');
    } else {
        console.log(inputNumber);
        console.log(inputText);
        document.getElementById('js-form').reset();
        modal.classList.remove('show');
        showBtn.classList.remove('hide');
    }
});
