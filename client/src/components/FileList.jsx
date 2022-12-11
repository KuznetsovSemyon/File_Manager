import React from 'react'
import FileItem from './FileItem'
import FolderItem from './FolderItem'

const FileList = ({ files, localPath, change, remove }) => {
    return (
        <div>
            {files.map(file => file.fileSize !== '-' ?
                <FileItem file = { file } localPath = { localPath } remove = { remove }/> :
                <FolderItem file = { file } localPath = { localPath } change = { change } remove = { remove }/>
            )}
        </div>
    )
}

export default FileList