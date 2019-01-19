import { SQLite } from 'expo';

const db = SQLite.openDatabase('back-to-life')

export const makeTransaction = async (sqlStatement: string) => {
    try {
        let result;
        db.transaction((transaction: SQLite.Transaction) => {
            transaction.executeSql(sqlStatement, [], (success: SQLite.Transaction, res: SQLite.ResultSet) => {
                console.log('sql executed success')
                console.log(res)
                result = res
            }, (error) => {
                console.log('sql executed error')                
                // console.log(error)
            })
        }, (error: SQLite.Error) => {
            console.log('transaction error')                            
            // console.log(error);
        }, () => {
            console.log('transaction success')            
        })

        while (typeof result === 'undefined') {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        return Promise.resolve(result)
    } catch(error) {
        console.warn(error);

        return Promise.reject(error)
    }
}