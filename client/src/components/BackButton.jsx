import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ localPath, change }) => {

    const comeBack = (localPath) => {
        const splitPath = localPath.split('/')
        splitPath.pop()
        change(splitPath.join('/'))
    }

    return (
        <button className = 'BackButton' onClick = { () => comeBack(localPath) }>
            <BsArrowLeft className = 'ToolIcon'/>
        </button>
    )
}

export default BackButton