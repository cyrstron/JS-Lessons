import './styles/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

const Hello = () => (
  <div className="greeting">
    Hello!
  </div>
);

ReactDOM.render(<Hello />, container);
