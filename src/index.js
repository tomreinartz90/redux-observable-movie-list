import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


/**
 * The redux state store, built with the Epic middleware.
 */
const store = createStore(
	rootReducer,
	applyMiddleware(epicMiddleware)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
