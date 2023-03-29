//search filter

//import {useState} from 'react'
//import Persons from './Persons'

const Filter = (props) => {

	
	
	const handleSearchChange = (event) => {
		console.log(event.target.value)
//		console.log('we went through here')
		props.setSearchTerm(event.target.value)
//		console.log(newName, 'is new name state')
	}
	
//	console.log(searchTerm, 'is search term')

//	<Persons peoples = {namesToShow}/>
	
//	console.log(props.folk, 'is props.folk in filter')
//	console.log(props.folk.filter((nume)=>nume.name), 'is props.folk.filter in filter')
//	console.log(props.folk.filter((nume)=>nume.name.includes(searchTerm)), 'is props.folk.filter includes searchterm in filter')
//	console.log(props.folk.filter((nume)=>nume.name.toLowerCase().includes(searchTerm.toLowerCase())), 'is props.folk.filter includes searchterm lowercase in filter')

//		<form>
//				<div>
//					filter shown with a <input
//											value={searchTerm}
//											onChange={handleSearchChange}/>
//				</div>
//		</form>
	
	return (
		<form>
				<div>
					filter shown with a <input
											value={props.searchTerm}
											onChange={handleSearchChange}/>
				</div>
		</form>
		)
}

export default Filter;