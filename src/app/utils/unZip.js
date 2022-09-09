import AdmZip from 'adm-zip'
import iconv from 'iconv-lite'

const parseString = require('xml2js').parseString;

const xmlToJson = (buffer) => {
    buffer = iconv.decode(buffer, 'win1251');
    return new Promise((resolve, reject) => {
        parseString(buffer, function (err, result) {
            if (err) reject(err);
            resolve(result)
        });
    })
}


export default async function unZipAndGetJson(response) {
    try {
        const zip = new AdmZip(response)
        const zipEntries = zip.getEntries();
        const buffer = zipEntries[0].getData();
        const dataJson = await xmlToJson(buffer)
        return dataJson
    } catch (error) {
        console.log(error)
    }

}