import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import ShopList from '../ShopList/ShopList.jsx';
import Form from '../Form/Form.jsx';

function App() {
	let [shoppingList, setShoppingList] = useState([]);

	useEffect(() => {
		getShoppingList();
	}, []);

	const getShoppingList = () => {
		axios
			.get('/shopping')
			.then((response) => {
				setShoppingList(response.data);
			})
			.catch((err) => {
				alert('error getting shopping list');
				console.log(err);
			});
	};

	return (
		<div className='App'>
			<Header />
			<main>
				<Form shoppingList={getShoppingList} />
				<ShopList shoppingList={shoppingList} />
			</main>
		</div>
	);
}

export default App;
