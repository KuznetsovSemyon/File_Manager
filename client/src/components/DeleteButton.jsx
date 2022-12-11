import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import FileService from '../API/FileService'

const DeleteButton = ({ file, localPath, remove }) => {

    const handleDelete = async (event) => {
        try {
            event.stopPropagation()
            let fullPath
            localPath ? fullPath = localPath + '/' + file.fileName :
                fullPath = file.fileName

            const response = await FileService.delete(fullPath)
            if(response)
                remove(file)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <button className = 'DeleteButton' onClick = { (event) => handleDelete(event) }>
            <AiOutlineDelete className = 'AiOutlineDelete'/>
        </button>
    )
}

export default DeleteButton