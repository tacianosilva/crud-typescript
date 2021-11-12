import sqlite3 from "sqlite3";

const DATABASE_FILE = process.env.DATABASE_FILE;

if (!DATABASE_FILE) {
    throw new Error('DATABASE_FILE environment variable not set!');
}

export const openConnection = () => {
    return new sqlite3.Database(DATABASE_FILE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the database.');
    });
}

export const executeQuery = (query: string, params?: any[]) => {
    let db = openConnection();
    return new Promise<any[]>((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        }); 
    })
    .finally(() => {
        closeConnection(db);
    });
}

export const dbQueryFirst = async (query: string, params?: any[]) => {
    const retorno = await executeQuery(query, params);
    return retorno[0];
}

export const closeConnection = (db: sqlite3.Database) => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}