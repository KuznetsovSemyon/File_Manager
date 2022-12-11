import React from 'react'
import { BsFolderPlus } from 'react-icons/bs'

const CreateFolderButton = ({ setActive }) => {
    return (
        <button className = 'CreateFolderButton' onClick = { () => { setActive(true) } }>
            <BsFolderPlus className = 'ToolIcon'/>
        </button>
    )
}

export default CreateFolderButton