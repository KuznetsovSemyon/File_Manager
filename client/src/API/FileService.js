import axios from 'axios'

export default class FileService {
    static async getFiles(localPath) {
        try {
            const response = await axios({
                method:'get',
                url: 'http://localhost:5000/api/files_list',
                params: {
                    localPath
                }
            })
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async downloadFile(localPath) {
        try {
            const response = await axios({
                method:'get',
                responseType: 'blob',
                url: 'http://localhost:5000/api/download',
                params: {
                    localPath
                }
            })

            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async uploadFile(formData) {
        try {
            const response = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data' }
            })

            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async createFolder(localPath) {
        try {
            const response = await axios({
                method:'post',
                url: 'http://localhost:5000/api/create_folder',
                data: {
                    localPath
                }
            })

            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    static async delete(localPath) {
        try {
            const response = await axios({
                method:'delete',
                url: 'http://localhost:5000/api/delete',
                data: {
                    localPath
                }
            })

            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}