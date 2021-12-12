import React from 'react';

const Panel = ({ handleImpNote }) => {
	return (
		<div>
			<button
				onClick={() => 
					handleImpNote(1)
			}
				className='panel'
			>Важное</button>
			<button
				onClick={() =>
					handleImpNote(0)
				}
				className='panel'
			>Всё</button>
		</div>
	);
};

export default Panel;
