import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
    if(!todos.length) {
        return (
            <div>
                <h2>Todo list is empty</h2>
            </div>
        )
    } else {
        return (<div className={styles.todoListContainer}>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>)
    }
   
    


}

export default TodoList;
