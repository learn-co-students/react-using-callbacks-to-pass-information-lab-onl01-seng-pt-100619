import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import chromeBoi from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={chromeBoi} />, document.getElementById('root'));
