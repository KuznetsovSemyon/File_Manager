import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import FileService from '../API/FileService'

const UploadFile = ({ localPath, addItem, setActive }) => {
    const [file, setFile] = useState({})

    const upload = async () => {
        let formData = new FormData()
        formData.append('localPath', localPath)
        formData.append('file', file)

        const response = await FileService.uploadFile(formData)
        if (response) {
            addItem({fileName: file.name, fileSize: file.size + ' Б'})
            document.getElementById('FileNameInput').value = ''
            setFile({})
            setActive(false)
        }
    }

    return (
        <div className = 'ModalContent' onClick = { e => e.stopPropagation() }>
            <div>
                <strong>Choose a file:</strong>
                <input id = 'FileNameInput'
                       type = 'file'
                       onChange = { event => setFile(event.target.files[0]) }/>
            </div>
            <button className = 'OkButton' onClick = { () => upload() }>
                <BsCheck2 className = 'ToolIcon'/>
            </button>
        </div>
    )
}

export default UploadFile