import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Panel from './components/Panel';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Это моя первая заметка!',
			date: '05.11.2021',
			imp: 0,
			color: 'note',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [impText, setImpText] = useState(0);

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
			imp: 0,
			color: 'note',
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const addNote2 = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
			imp: 1,
			color: 'note2',
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<Panel handleImpNote={setImpText} />
				<NotesList
					notes={notes.filter((note) => 
						note.text.toLocaleLowerCase().includes(searchText) && note.imp >= impText
					)}
					handleAddNote={addNote}
					handleAddNote2={addNote2}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;