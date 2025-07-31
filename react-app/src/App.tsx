import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App(){
	let items = [
		'New York',
		'Tokyo',
		'London',
		'Casa Blanca'
	];
	const handleSelectItem = (item: string) => {
		console.log(item);
	}

	const [alertVisible, setAlerVisible] = useState(false);
	return (
		<div>
			{/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} /> */}
			{alertVisible && <Alert onClose={() => setAlerVisible(false)}> My Alert </Alert>}
			<Button color="primary" onClick={() => setAlerVisible(true)}> My Button </Button>
		</div>
		);
}

export default App;
