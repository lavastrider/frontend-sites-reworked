const Person = ({ izena, removeEntry}) => {
	
	return (
		<li>
			{izena.phoneName} {izena.phoneNumber}
			<button onClick={removeEntry}>delete</button>
		</li>
	)
}

export default Person