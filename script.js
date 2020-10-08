let key = document.querySelectorAll('.key');
let textd = document.querySelector('.display');
let clear = document.querySelector('.clear');


for (let keys of key) {
  keys.onclick = function () {
  textd.textContent = textd.textContent + keys.textContent;
  }
}

  clear.onclick = function () {
    textd.textContent = '';
  }