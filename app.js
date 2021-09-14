let express = require("express");
let app = express();

// let db = require("./connectDb")
let conn = require("./database")
var cors = require('cors')

app.use(cors())
app.listen(8001, () => {
 console.log("Server running on port 8001");
});

app.get("/api/albums", (req, res, next) => {
    var sql = "select * from albums"
    // var params = []
    conn.all(sql, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })

      });
    // conn.close()
});
app.get("/api/employees", (req, res, next) => {
    var sql = "select EmployeeId, FirstName || ' ' || LastName as FullName, Title, City, Email  from employees"
    // var params = []
    conn.all(sql, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })

      });
    // conn.close()
});





// app.get("/ur", (req, res, next) => {
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//    });

// app.get("/playlist",async (req,res,next)=>{
//     const playlist = await db.getPlaylist();
//     res.status(200).json({playlist});
// })