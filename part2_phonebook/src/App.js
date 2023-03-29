import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import nameService from './services/names'
import Notification from './components/Notification'

const App = (props) => {

	const [people, setPeople] = useState(props.persons)
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [idn, setIdn] = useState(people.length)
	const [searchTerm, setSearchTerm] = useState('')
	const [deletedEntry, setDeletedEntry] = useState('')
	const [entry, setEntry] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		nameService
			.getAll()
			.then(initialName => {
	        	console.log('promise fulfilled')
	        	setNewName(initialName)
	      })
	  }, []
	  )
	  
	 
//	console.log(namesToShow, 'is names to show')
		
		
//		<div>debug: {newName}</div>
//		<Persons peoples = {people}/>
			
	return (
		<div>
			<h2>Phonebook</h2>
			
			<Notification message={errorMessage}/>
			
			<Filter 
				folk = {people}
				searchTerm = {searchTerm}
				setSearchTerm = {setSearchTerm}/>
					
			<h2>Add A New Entry</h2>
			
			<PersonForm 
				people={people}
				setPeople={setPeople}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				idn={idn}
				setIdn={setIdn}
				entry={entry}
				setEntry={setEntry}
				setErrorMessage={setErrorMessage}
				/> 
			
			<h2>Numbers</h2>
			
			<Persons 
				peoples = {people}
				setPeoples = {setPeople}
				deletedEntry={deletedEntry}
				setDeletedEntry={setDeletedEntry}
				searchInput={searchTerm}
				nameService={nameService}
				/>
			
				
		</div>
	)
}

export default App;