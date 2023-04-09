import { useState } from 'react';

function App() {
	const [list, setList] = useState(['Luiz', 'Marcos', 'Jesus']);

	function addToList() {
		setList((prev) => [...prev, 'Novo']);
	}

	return (
		<>
			<button onClick={addToList}>Adicionar</button>
			<ul>
				{list.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default App;
