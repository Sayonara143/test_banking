import getArrayAccounts from './app/utils/getArrayAccounts'

const app = async () => {
    const arAccounts = await getArrayAccounts()
    console.table(arAccounts)
}
app()
    .catch(err => { console.error(err.stack); process.exit(1); });

