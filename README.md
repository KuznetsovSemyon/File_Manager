## Start
File_Manager/client/ npm install \
File_Manager/client/ npm start 

File_Manager/server/ npm install \
File_Manager/server/ npm start

## Note
### if the path is not specified, then the root folder of the local file system will be used

## Get file list
method: get, \
url: http://localhost:5000/api/files_list, \
query params: localPath

Example: \
http://localhost:5000/api/files_list?localPath=new_folder \
For root directory: \
http://localhost:5000/api/files_list?localPath


## Download file
method:get, \
url: http://localhost:5000/api/download, \
query params: localPath

Example: \
http://localhost:5000/api/download?localPath=new_folder/node_logo.png \
For root directory: \
http://localhost:5000/api/download?localPath=text.txt

## Upload file
method:post, \
url: http://localhost:5000/api/upload, \
headers: { 'content-type': 'multipart/form-data' } \
body: { \
key: localPath value: [text] \
key: file value: [file] \
}

## Create folder
method:'post', \
url: 'http://localhost:5000/api/create_folder', \
body: { \
localPath \
}

localPath = path [optional] + folder name [required] \
Folder name must be at least one character long  \
Example: \
{ \
"localPath": "new_folder/MyFolderName" \
} 

## Delete file or folder
method:'delete', \
url: 'http://localhost:5000/api/delete', \
body: { \
localPath \
}

localPath = path [optional] + item name [required]