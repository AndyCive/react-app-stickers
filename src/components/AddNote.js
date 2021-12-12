import { useState } from 'react';

const AddNote = ({ handleAddNote, handleAddNote2 }) => {
	const [noteText, setNoteText] = useState('');
	const [x, setX] = useState(false);
	const characterLimit = 200;
	var impp = false;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const soldCheckbox = ({ target: { checked } }) => {
		setX(checked);
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			if (x == true) {
				handleAddNote2(noteText);
			}
			else {
				handleAddNote(noteText);
			}
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Введите, чтобы добавить заметку...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} симв. ост.
				</small>
				<small>|  Важно?</small>
				<input type="checkbox" checked={x} onChange={soldCheckbox} />
				<button className='save' onClick={handleSaveClick}>
					Сохранить
				</button>
			</div>
		</div>
	);
};

export default AddNote;
