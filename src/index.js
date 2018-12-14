import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Components
import Link from './components/Link';

const App = (
	<div className="app" data-js="app-main">
		<header className="header" data-js="header-container">
			<img alt="Logo" src="../assets/react.png"/>
			<span className="sym-add">+</span>
			<img alt="Logo" src="../assets/electron.png"/>
		</header>
		<section>
			<h2>A Simplified Electron with React Boilerplate Project</h2>
			<p>This bare bones application provides a basis to develop and build your Electron Application with ReactJS.</p>
		</section>
		<footer className="footer" data-js="footer-container">
			<div className="link-container" data-js="link-container">
				<Link className="link" data-js="link-medium" isExternal={true} href="https://medium.com/@mitchpierias/the-dream-team-react-with-electron-c808ecb5b55e">Medium</Link>
				<Link className="link" data-js="link-github" isExternal={true} href="https://github.com/MitchPierias/React-Electron-Boilerplate">Github</Link>
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