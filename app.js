let express = require("express");
let app = express();
app.listen(8001, () => {
 console.log("Server running on port 8001");
});
app.get("/ur", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });