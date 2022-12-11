import React from 'react'
import { FcDocument } from 'react-icons/fc'
import DeleteButton from './DeleteButton'
import DownloadButton from './DownloadButton'

const FileItem = ({ file, localPath, remove }) => {
    return (
        <div className = 'RowEntity Item'>
            <div className = 'ItemInfo'>
                <div>
                    <FcDocument className = 'ItemIcon'/>
                </div>
                <div className = 'FileName'>
                    <strong>{ file.fileName }</strong>
                    <div>{ file.fileSize }</div>
                </div>
            </div>
            <div className = 'ToolBar'>
                <DownloadButton file = { file } localPath = { localPath }/>
                <DeleteButton file = { file } localPath = { localPath } remove = { remove }/>
            </div>
        </div>
    )
}

export default FileItem