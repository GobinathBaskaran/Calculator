import fileSystem from 'react-native-fs';

export const readFile = async () => {
    return fileSystem.readFile(fileSystem.DocumentDirectoryPath + 'defaultData.json').then((data) => {
        return JSON.parse(data);
    }, (err) => {
        console.log(err);
    });
}

export const writeFile = async (data) => {
    data = JSON.stringify(data);
    return fileSystem.writeFile(fileSystem.DocumentDirectoryPath + 'defaultData.json', data).then(() => {
        return true
    }, (err) => {
        console.log(err);
    });
}