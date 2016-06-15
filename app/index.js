import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Note from './components/Note.jsx';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
	<Note />, 
	document.getElementById("app")
);