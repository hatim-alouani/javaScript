import {useState, useEffect} from "react";

export default function App(){

	const [advice, setAdvice] = useState("");
	const [count, setCount] = useState(0);

	async function getAdvice(){
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		// console.log(data.slip.advice);
		setAdvice(data.slip.advice);
		setCount((c) => c + 1);
	}
	useEffect(function(){
		getAdvice();
	}, []);
	return(
	<div>
		<h1>{advice}</h1>
		<button onClick={getAdvice}>get advice</button>
		<Message count={count} />
	</div>
	);
}

function Message(props){
	return (
		<p>you have read <strong>{props.count}</strong> pieces of advices</p>
	);
}
