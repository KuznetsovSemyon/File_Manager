import React, { useState, useEffect } from 'react'
import NavRow from './components/NavRow'
import FileList from './components/FileList'
import FileService from './API/FileService'
import './styles/App.css'

function App() {
    const [localPath, setPath] = useState('')
    const [files, setFiles] = useState([])

    useEffect(() => {
        fetchFiles()
    }, [localPath])

    const fetchFiles = async () => {
        const files = await FileService.getFiles(localPath)
        setFiles(files)
    }

    const changePath =  (newPath) => {
        setPath(newPath)
    }

    const removeItem = (item) => {
        setFiles(files.filter(it => it.fileName !== item.fileName))
    }

    const addItem = (item) => {
        setFiles([...files, item])
    }

  return (
    <div className = 'App'>
        <NavRow localPath = { localPath } change = { changePath } addItem = { addItem }/>
        <FileList files = { files } localPath = { localPath } change = { changePath } remove = { removeItem }/>
    </div>
  )
}

export default App
