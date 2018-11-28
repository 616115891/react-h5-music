import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/main.scss'
import Root from './root'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

module.hot.accept();