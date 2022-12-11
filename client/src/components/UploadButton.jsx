import React from 'react'
import { BsUpload } from 'react-icons/bs'

const UploadButton = ({ setActive }) => {
    return (
        <button className = 'UploadButton' onClick = { () => { setActive(true) } }>
            <BsUpload className = 'ToolIcon'/>
        </button>
    )
}

export default UploadButton