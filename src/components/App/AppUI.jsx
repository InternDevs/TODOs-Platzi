import React,{ useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI(){
    const {
        loading, 
        error,
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        searchValue,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    return(
        <>
            <TodoCounter />
            <TodoSearch /> 
            
            <TodoList>
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {error && <p>Entra en panico, no cargo O.o</p>}
                {(searchedTodos.length === 0 && !loading) && <p>No lo pudimos encontrar   T . T</p>}
                {(!loading && !searchedTodos.length && !error && !searchValue) && <p>Crea tu primer TODO ^^</p>}

                {searchedTodos.map( todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.complete} 
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm setOpenModal={setOpenModal} />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal}/>
      </>
    );
}

export { AppUI };