// Your JS goes here
var body = document.querySelector('body');

for (var i = 1; i <= 63; i++) {
  var div = document.createElement('div');
  div.style.width = '11.1%';
  div.style.paddingBottom = '11.1%';
  div.style.float = 'left';
  if (i % 2) {
    div.style.background = 'black';
  } else {
    div.style.background = 'red';
  }
  body.appendChild(div);
}
