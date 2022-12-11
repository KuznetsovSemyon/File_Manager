import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import FileService from '../API/FileService'

const CreateFolder = ({ localPath, addItem, setActive }) => {
    const [folderName, setName] = useState('')

    const create = async () => {
        let fullPath
        localPath ? fullPath = localPath + '/' + folderName :
            fullPath = folderName

        const response = await FileService.createFolder(fullPath)
        if (response) {
            addItem({ fileName: folderName, fileSize: '-' })
            setName('')
            setActive(false)
        }
    }

    return (
        <div className = 'ModalContent' onClick = { e => e.stopPropagation() }>
            <div>
                <strong>Enter folder name:</strong>
                <input id = 'FolderNameInput'
                       value = { folderName }
                       onChange = { event => setName(event.target.value) }/>
            </div>
            <button className = 'OkButton' onClick = { () => create() }>
                <BsCheck2 className = 'ToolIcon'/>
            </button>
        </div>
    )
}

export default CreateFolder