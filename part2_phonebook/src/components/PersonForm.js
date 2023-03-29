	//component that is form for adding new people to the phone book
	import axios from 'axios'
	import nameService from '../services/names'
	import {useState} from 'react'
	
	const PersonForm = (props) => {
	
		
		const addPerson = (event) => {
			event.preventDefault()
			const personObject = {
				phoneName: props.newName,
				phoneNumber: props.newNumber,
				id: props.idn + 1
				}
				
	//		const isSame = (persons.find((nume) => nume.name === personObject.name))
	//		console.log(isSame, 'is is Same')
	//		if (typeof isSame !== 'undefined')
	
			if (props.people.find((nume) => nume.phoneName === personObject.phoneName) && props.people.find((digit) => digit.phoneNumber === personObject.phoneNumber)) {
				//console.log(digit.phoneNumber, 'is digit phone number')
				console.log(personObject.phoneNumber, 'is person object phone number')
				window.alert(`${props.newName} is already in the phonebook. If you were trying to update ${props.newName}'s entry, then the number is invalid.`)
				console.log('we found a match')
				props.setNewName('')
				props.setNewNumber('')
				return
			}
			
			//if name equals name AND number does not equal number
			if (props.people.find((izen) => izen.phoneName === personObject.phoneName) && props.people.find((numb) => numb.phoneNumber !== personObject.phoneNumber)) {
				if (window.confirm(`${props.newName} is already in the phonebook. Would you like to replace the old number with the new one?`)) {
					console.log('we found a match, replace is going to happen')
					
					const volk = props.people.find((ppl) => ppl.phoneName === personObject.phoneName)
					const updatedVolk = {...volk, phoneNumber: props.newNumber}
					console.log(updatedVolk, 'is updatedVolk')
					
					console.log(props.people.map((individual)=> individual.id), 'is props people map id')
					console.log(props.people.map((individuall)=> individuall.name), 'is props people map name')
					
					
					axios
						.put(`/api/persons/${volk.id}`, {phoneName: updatedVolk.phoneName, phoneNumber: updatedVolk.phoneNumber, id: updatedVolk.id})
						.then(returnedEntry => {
							console.log(returnedEntry, 'is returned entry')
							props.setPeople(props.people.map((individ)=>
								individ.id !== updatedVolk.id 
									? individ : returnedEntry.data))
							})
							.catch(error=>
								props.setErrorMessage(`Information of ${personObject.phoneName} has either already been removed from the server, or the number was invalid`),
								setTimeout(() => {
  									props.setErrorMessage(null)
  								}, 2125)
  							)
							props.setErrorMessage(`Updated ${personObject.phoneName}'s number`)		
							setTimeout(() => {
  								props.setErrorMessage(null)
  							}, 2125)
  						
  					
						
					}
				console.log('did not want to replace or we already replaced')
				props.setNewName('')
				props.setNewNumber('')
				return
			}
			
			//const url = `http://localhost:3001/notes/${id}`
	  		//const note = notes.find(n => n.id === id)
	  		//const changedNote = { ...note, important: !note.important}
				
			
			axios
				.post('/api/persons', personObject)
				.then(response => {
					props.setPeople(props.people.concat(personObject))
					console.log('we got here')
					props.setNewName('')
					props.setNewNumber('')
					props.setIdn(props.idn+1)
					props.setErrorMessage(
						`Added ${personObject.phoneName}`
					)
					setTimeout(() => {
  						props.setErrorMessage(null)
  						}, 2125)
				})
				.catch((error) => {
					props.setErrorMessage(error.response.data.error)
					console.log(error.response.data.error)
				})
						
		}
		
		const handleNameChange = (event) => {
	//		console.log(event.target.value)
	//		console.log('we went through here')
			props.setNewName(event.target.value)
	//		console.log(newName, 'is new name state')
			}
			
		const handleNumChange = (event) => {
	//		console.log(event.target.value)
	//		console.log('we went through here')
			props.setNewNumber(event.target.value)
	//		console.log(newName, 'is new name state')
			}
			
	//				<div>debug: {newName}</div>
	//				<div>debug: {newNumber}</div>
	
		
		return (
			<form onSubmit={addPerson}>
					<div>
						name: <input 
								value={props.newName}
								onChange={handleNameChange}/>
					</div>
					<div>
						number: <input
									value={props.newNumber}
									onChange={handleNumChange}/>
					</div>
					<div>
						<button type="submit">add</button>
					</div>
	
				</form>
		)
	}
	
	export default PersonForm;