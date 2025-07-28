// import { Fragment } from "react/jsx-runtime";

import { Fragment } from "react/jsx-runtime";

function ListGroup() {
	let items = [
		'New York',
		'Tokyo',
		'London',
		'Casa Blanca'
	];
	return (
	<>
		<h1>List</h1>
		{items.length === 0 && <p>No item found</p>}
		<ul className="list-group">
			{items.map((item) =>(
				<li className="list-group-item"
					key={item}
					onClick={() => console.log(item )}
				>
					{item}
				</li>))}
		</ul>
	</>
  );
}

export default ListGroup;
