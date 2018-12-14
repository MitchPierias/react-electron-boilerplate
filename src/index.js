import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (
	<div className="app" data-js="app-main">
		<header className="header" data-js="header-container">
			<img alt="Logo"/>
			<h1>Reactron</h1>
		</header>
		<section>
			<h2>A Simplified Electron with React Boilerplate Project</h2>
			<p>This bare bones application provides a basis to develop and build your Electron Application with ReactJS.</p>
		</section>
		<footer className="footer" data-js="footer-container">
			<div className="link-container" data-js="link-container">
				<a className="link" data-js="link-medium" href="#">Medium</a>
				<a className="link" data-js="link-github" href="https://github.com/MitchPierias/Reactron">Github</a>
			</div>
			<span className="caption" data-js="footer-caption">
				<small>Remember to spread the love!</small>
				<small>Give stars on Github and claps on Medium</small>
			</span>
		</footer>
	</div>
)
// Render and Inject our compoent tree into the 'root' element
ReactDOM.render(App, document.getElementById('root'));