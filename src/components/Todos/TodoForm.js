import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input
                className={styles.form__input}
                placeholder="Enter new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <Button className={styles.form__btn} type="submit" title="Submit">
                Submit
            </Button>
        </form>
    );
}

export default TodoForm;
