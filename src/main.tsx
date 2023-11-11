import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './index.css';
import {
	HashRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>,
);
