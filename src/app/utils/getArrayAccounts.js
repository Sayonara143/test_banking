import { defaultRequest } from "../services/api.js"
import unZipAndGetJson from "./unZip.js";

export default async function getArrayAccounts() {
    const response =  await defaultRequest()
    const fileJson = await unZipAndGetJson(response)
    const keysObjectRangOne = Object.keys(fileJson)
    const result = []
    fileJson[keysObjectRangOne[0]]?.BICDirectoryEntry?.forEach(item =>{
        
        if (item?.Accounts === undefined) {
            return
        }
        
        const nameBank = item?.ParticipantInfo[0]['$']?.NameP || 'Не известно'
        const accounts = item.Accounts
        accounts?.forEach(account => {
            result.push({
                bic: item['$']?.BIC,
                name: nameBank,
                coorAccount: account['$']?.Account
            })
        })
    })
    return result
}