import React, { useState } from 'react'
import { Modal } from './Modal'
import './Modal.css'

export function Todo({ todo, deleteTodo, updateTodo }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isCompleted, setIsCompleted] = useState(todo.status || false)

    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)

    const handleCheckBox = () => {
        setIsCompleted(!isCompleted)
        updateTodo(todo.id, todo.title, !isCompleted)
    }

    return (
        <div className="todo">
            <input type="checkbox"
            onChange={handleCheckBox}
            checked={isCompleted}
            />
            <span className={isCompleted ? 'completed' : ''}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
            <button onClick={handleOpenModal}>Поменять</button>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onUpdate={(newTitle) => {
                    updateTodo(todo.id, newTitle)
                    handleCloseModal()
                }}
                currentTitle={todo.title}
                id={todo.id}
            />
        </div>
    )
}
