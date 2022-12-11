import React from 'react'
import { FcOpenedFolder } from 'react-icons/fc'
import DeleteButton from './DeleteButton'

const FolderItem = ({ file, localPath, change, remove }) => {

    const openFolder = (localPath) => {
        let newPath
        localPath ? newPath = localPath + '/' + file.fileName :
            newPath = file.fileName
        change(newPath)
    }

    return (
        <div className = 'RowEntity Item' onClick = { () => openFolder(localPath) }>
            <div className = 'ItemInfo'>
                <div>
                    <FcOpenedFolder className = 'ItemIcon'/>
                </div>
                <div className = 'FileName'>
                    <strong>{ file.fileName }</strong>
                </div>
            </div>
            <div className = 'ToolBar'>
                <DeleteButton file = { file } localPath = { localPath } remove = { remove }/>
            </div>
        </div>
    )
}

export default FolderItem