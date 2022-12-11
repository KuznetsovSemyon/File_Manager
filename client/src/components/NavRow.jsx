import React, { useState } from 'react'
import Modal from './Modal'
import BackButton from './BackButton'
import UploadFile from './UploadFile'
import UploadButton from './UploadButton'
import CreateFolder from './CreateFolder'
import CreateFolderButton from './CreateFolderButton'

const NavRow = ({ localPath, change, addItem }) => {
    const [modalCFActive, setModalCFActive] = useState(false)
    const [modalUFActive, setModalUFActive] = useState(false)

    return (
        <div className = 'RowEntity'>
            <h3><strong>Path: { localPath }</strong></h3>
            <div className = 'ToolBar'>
                <CreateFolderButton setActive = { setModalCFActive }/>
                <UploadButton setActive = { setModalUFActive }/>
                <BackButton localPath = { localPath } change = { change }/>
                <Modal active = { modalCFActive } setActive = { setModalCFActive }>
                    <CreateFolder localPath={ localPath } addItem = { addItem } setActive = { setModalCFActive }/>
                </Modal>
                <Modal active = { modalUFActive } setActive = { setModalUFActive }>
                    <UploadFile localPath = { localPath } addItem = { addItem } setActive = { setModalUFActive }/>
                </Modal>
            </div>
        </div>
    )
}

export default NavRow