const sqlite3 = require('sqlite3').verbose();

   let db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE, (err) => {
     if (err) {
       console.error(err.message);
     }
     console.log('Connected to the chinook database.');
   });
   
   const getPlaylist = () =>{
        let sql = `SELECT DISTINCT Name FROM playlists
                    ORDER BY name`;

        db.all(sql, [], (err, rows) => {
        if (err) {
        throw err;
        }
        console.log(rows);
        return rows    


        });

        db.close();
   }

   module.exports={
    getPlaylist
   }