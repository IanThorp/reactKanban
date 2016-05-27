var React = require('react');
var ReactDOM = require('react-dom');

var { h1, div, li, ul, p } = React.DOM;

ReactDOM.render(
	<h1>Hello, World!</h1>,
	<p> This is a test page </p>,
	<ul> This is a list of things</ul>,
		<li> list item number 1</li>,
		<li> And this is the second list item</li>,
	</ul>,
	// document.getElementById('example'),
);