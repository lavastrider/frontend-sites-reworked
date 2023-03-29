//component that renders the list of people

//import Filter from './Filter'
//import nameService from './services/names'
import Person from './Person'
import {useState} from 'react'	

const Persons = (props) => {	

	console.log(props.peoples, 'is props peoples in persons')
//	console.log(props.peoples.name, 'is props peoples name') <- outputs undefined
	console.log(props.peoples.map((ume) => ume.phoneName), 'is props people map phone name in persons')
	
	console.log(props.peoples.map((ident)=>ident.id), 'is props people map id in persons')
	
//	console.log(props.peoples.map((ime) => ime.name), 'is props peoples map')
//	console.log(props.peoples.filter((ime) => ime.name.includes('l')), 'is props peoples filter includes')
//	console.log(props.peoples.filter((ime) => ime.name.toLowerCase().includes('d')), 'is props peoples filter includes lowercase')
	
	const namesToShow = props.searchInput === ''
	? props.peoples
	: props.peoples.filter((ime) => ime.phoneName.toLowerCase().includes(props.searchInput.toLowerCase()))

//	const namesToShow = props.searchInput === ''
//	? newArray
//	: newArray.filter((ime) => ime.name.toLowerCase().includes(props.searchInput.toLowerCase()))
			
	const deleteEntry = (id) => {
		
		//go through array. if id in array matches given id, then do array.splice(id, 1)
		
		const foundID = props.peoples.findIndex((selection) => selection.id === id)
		console.log(foundID, 'is foundid for index')
		const newArray = [...props.peoples]
		console.log(newArray, 'is newArray after copying props peoples')
		const newDB = [newArray.splice(foundID, 1)]
		console.log(newArray, 'is new array after splice')
		console.log(newDB, 'is newDB')
		
		if (window.confirm('Are you sure you want to delete this entry?')) {
			console.log('agreed to terms and conditions')
			//do deletion			
			props.nameService
				.deletion(id)
				.then(
					//update props.peoples with new array with deleted entry
					console.log(props.peoples, 'is peoples before setppl'),
					props.setPeoples(newArray),
					console.log(props.peoples, 'is peoples after setPPl'),
					console.log('we got here')
				)
				.catch(error=> {
					alert(`The entry ${foundID.name} has already been deleted`)
				})			
		}
		
		console.log('the delete button was clicked')
		
	}


	return (
		<ul>
			{namesToShow.map((nomen)=>
				<Person
					key={nomen.id}
					izena={nomen}
					removeEntry={() => deleteEntry(nomen.id)}
					/>
			)}
		</ul>
	)
				
}

export default Persons;