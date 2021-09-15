let express = require("express");
let app = express();
let db = require("./database")
var cors = require('cors')

app.use(cors())
app.listen(8001, () => {
  console.log("Server running on port 8001");
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.get("/api/albums", (req, res, next) => {
    var sql = "select * from albums"
    db.all(sql, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })

      });
    // db.close()
});
app.get("/api/employees", (req, res, next) => {
    var sql = "select EmployeeId, FirstName || ' ' || LastName as FullName, Title, City, Email  from employees"
    db.all(sql, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })

      });
    // db.close()
});





