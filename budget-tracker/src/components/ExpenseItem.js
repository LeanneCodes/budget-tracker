import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className={props.cost > 450 ? 'btn btn-sm btn-danger rounded-5 text-white mx-3' : 'btn btn-sm btn-primary rounded-5 text-white mx-3'}>£{props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;