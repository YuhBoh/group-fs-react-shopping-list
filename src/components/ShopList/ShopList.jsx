import './ShopList.css';

function ShopList(props) {
	const purchasedItem = () => {
		console.log('clicked');
	};

	return (
		<>
			<h2>Shopping List</h2>
			<div>
				<button type='reset'>Reset</button>
				<button>Clear</button>
			</div>

			<div className='container'>
				{props.shoppingList.map((items) => (
					<div key={items.id}>
						<div className='box'>
							<p>{items.name}</p>
							<p>
								{items.quantity} {items.unit}
							</p>
							<div className='buttonDiv'>
								<button onClick={purchasedItem}>Buy</button>
								<button>Remove</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default ShopList;
