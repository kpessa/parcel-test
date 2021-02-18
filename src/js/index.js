import '../css/main.scss';
import { getRandomInt, getRandomKey, getRandomText } from './random';
import { options } from './options';

let start = parseInt(new URLSearchParams(window.location.search).get('start')) || 9;
let stop = parseInt(new URLSearchParams(window.location.search).get('stop')) || 17;

document.getElementById('list').setAttribute('start', start);

let a = {};
for (let i = start; i <= stop; i++) {
  try {
    let lock = a[i].lock;
  } catch {
    a[i] = {
      text: getRandomText(),
      lock: 'false',
    };
  }
}

Object.entries(a).forEach(d => {
  let i = d[0];
  let li = $('<li>').text(d[1].text).attr('data-id', i);
  let btnKeep = $('<button>').text('L').attr('data', 'lock').attr('data-id', i);
  let btnRedo = $('<button>').text('R').attr('data', 'redo').attr('data-id', i);
  li.append(btnKeep);
  li.append(btnRedo);
  $('ol').append(li);
});

$('main').on('click', 'button[data="lock"]', event => {
  a[event.target.getAttribute('data-id')].lock = true;
  console.log(a);
});

$('main').on('click', 'button[data="redo"]', event => {
  let i = event.target.getAttribute('data-id');
  a[i].text = getRandomText();
  $(`li[data-id="${i}"]`).text(a[i].text);
  $(`li[data-id="${i}"]`).append($('<button>').text('L').attr('data', 'lock').attr('data-id', i));
  $(`li[data-id="${i}"]`).append($('<button>').text('R').attr('data', 'redo').attr('data-id', i));
  console.log(a);
});

$('ol').sortable();
$('ol').disableSelection();
$('li').sortable();
$('li').disableSelection();
