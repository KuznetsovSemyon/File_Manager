import React from 'react'

const Modal = ({ active, setActive, children }) => {
    return (
        <div className = { active ? 'Modal active' : 'Modal' } onClick = { () => setActive(false) }>
            { children }
        </div>
    )
}

export default Modal