import iconCross from '../images/icon-cross.svg'

const Todo = ({ todoInfo, deleteTodo }) => {
	return (
		<div className='note-container'>
			<span className='complete-checkbox-container'>
				<input type='checkbox'></input>
			</span>
			<p className='note-text'>{todoInfo.content}</p>
			<button className='delete-button' onClick={() => deleteTodo(todoInfo.id)}>
				<img className='delete-button-icon' src={iconCross} alt=''></img>
			</button>
		</div>
	)
}

export default Todo;