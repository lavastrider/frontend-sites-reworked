import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'

axios
	.get('/api/persons')
	.then(response => {
		const persons = response.data
		ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />)
	})

	const persons = [
			{ 
				name: 'Arto Hellas', 
				number: '04-1234567', 
				id: 1
			},
			{ 
				name: 'Ada Lovelace', 
				number: '39-44-5323523', 
				id: 2 
			},
			{ 
				name: 'Dan Abramov', 
				number: '12-43-234345', 
				id: 3 
			},
			{ 
				name: 'Mary Poppendieck', 
				number: '39-244-6423122', 
				id: 4 
			}
	]


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
