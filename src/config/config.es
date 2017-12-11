import path from 'path';
const con = new Map();

con.set('port','3001');
con.set('staticFilePath',path.join(__dirname,"..","public"));
export default con;