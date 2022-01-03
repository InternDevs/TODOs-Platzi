import React,{ useState,useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm({setOpenModal}) {
    const [textTodoValue, setTextTodoValue] = useState('');

    const { addTodo } = useContext(TodoContext);

    const onChangeValue = (event) => {
        setTextTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(textTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea 
                placeholder="Cortar la cebolla para el almuerzo" 
                value={textTodoValue} 
                onChange={onChangeValue}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel} 
                    className="TodoForm-button TodoForm-button-cancel"
                >
                        Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };