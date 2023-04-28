import { useState } from 'react';
import axios from 'axios';

function Form(props) {
	const [item, setItem] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [unit, setUnit] = useState('');

	const addItem = () => {
		axios
			.post('/shopping', { name: item, quantity: quantity, unit: unit })
			.then((response) => {
				//clear inputs
				setItem('');
				setQuantity(0);
				setUnit('');
				//rerender the dom
				props.shoppingList();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(item);
		console.log(quantity);
		console.log(unit);
		addItem();
	};

	return (
		<>
			<h2>Add an Item</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='Item'>Item: </label>
				<input
					type='text'
					name='Item'
					id='Item'
					value={item}
					onChange={(evt) => setItem(evt.target.value)}
				/>
				<br />
				<label htmlFor='Quantity'>Quantity: </label>
				<input
					type='text'
					name='Quantity'
					id='Quantity'
					value={quantity}
					onChange={(evt) => setQuantity(evt.target.value)}
				/>
				<label htmlFor='Unit'>Unit: </label>
				<input
					type='text'
					name='Unit'
					id='Unit'
					value={unit}
					onChange={(evt) => setUnit(evt.target.value)}
				/>
				<br />
				<input type='submit' value='Save' />
			</form>
		</>
	);
}

export default Form;
