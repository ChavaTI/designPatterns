import Connection from './db/connection';

const connection = Connection.getInstance('http:psql');
const connection2 = Connection.getInstance('other query');

connection.connect();
// Logic
connection.disconnect();

if (connection === connection2) console.log('are the same');
