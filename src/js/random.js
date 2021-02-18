import { options } from './options';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomKey = () => Object.keys(options)[getRandomInt(0, Object.keys(options).length - 1)];

const getRandomText = () => {
  let text = options[getRandomKey()].pop();
  try {
    return text ? text : getRandomText();
  } catch {
    alert('Ran out of options!');
  }
};

export { getRandomInt, getRandomKey, getRandomText };
