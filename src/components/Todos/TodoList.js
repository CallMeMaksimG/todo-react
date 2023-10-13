import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos }) {
    if(!todos.length) {
        return (
            <div>
                <h2>Todo list is empty</h2>
            </div>
        )
    } else {
        return (<div className={styles.todoListContainer}>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>)
    }
   
    


}

export default TodoList;
