import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

let title = 'Hello, world!';
let map = Immutable.Map({ title: title });

ReactDOM.render(
  <h1>{map.get('title')}</h1>,
  document.getElementById('container')
);
