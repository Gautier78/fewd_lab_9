import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hellow World!</h1>,
  document.getElementById('root')
);
ReactDOM.render(
  <h1>Goodbye!</h1>,
  document.getElementById('other')
);

ReactDOM.render(
  <progress class="progress is-small is-primary" max="100">15%</progress>,
  document.getElementById('test')
);

ReactDOM.render(
  document.getElementById('card')
);

