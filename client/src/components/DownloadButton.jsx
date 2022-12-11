import React from 'react'
import { BsDownload } from 'react-icons/bs'
import FileService from '../API/FileService'

const DownloadButton = ({ file, localPath }) => {

    const download = async () => {
        let fullPath
        localPath ?
            fullPath = localPath + '/' + file.fileName :
            fullPath = file.fileName

        const response = await FileService.downloadFile(fullPath)

        const downloadUrl = window.URL.createObjectURL(new Blob([response]))
        const link = document.createElement('a')
        link.href = downloadUrl
        link.setAttribute('download', file.fileName)
        document.body.appendChild(link)
        link.click()
    }

    return (
        <button className = 'DownloadButton' onClick = { () => { download() } }>
            <BsDownload className = 'ToolIcon'/>
        </button>
    )
}

export default DownloadButton