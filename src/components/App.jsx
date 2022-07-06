import React , { useState } from 'react';
import styles from './App.module.css';
import { AiOutlineDelete } from 'react-icons/ai';
   
function App() {
	const [notes, setNotes] = useState(['Погладить собаку', 'Искупаться в озере', 'Погулять до утра', 'Прочитать книгу с захватывающим сюжетом', 'Проспать до полудня', 'Встретить закат у моря']);
	const [value, setValue] = useState('');
	
	const result = notes.map((note, index) => {
		return <li className={styles.Dream} key={index} onClick={() => removeItem(index)}>{note}<AiOutlineDelete className={styles.removeIcon}/></li>;
	});
	
	function addItem() {
		setNotes([...notes, value]);
		setValue('');
	}
	function removeItem(index) {
     setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}
	
	function changeInput(event) {
		setValue(event.target.value);
	}
	
	return (
	    <div className={styles.App}>
		<main className={styles.Content}>	
		<h1 className={styles.Heading}>DAYDREAMING</h1>	
		<p className={styles.Paragraph}>Hello, dreamer!</p>
		<p className={styles.Paragraph}>Write here your dreams and remove when it realised.</p>
		<p className={styles.Paragraph}>There are some of my list. Injoy of dreaming!</p>
	    <ul className={styles.List}>
		{result}
		</ul>
		<div className={styles.Container}>
			
		<input className={styles.Input}value={value} onChange={changeInput} />
		<button className={styles.Button}onClick={addItem}>add a dream</button></div>
	    
		</main>
		</div>)
}

export default App;
