let express = require("express");
let app = express();
let db = require("./connectDb")

app.listen(8001, () => {
 console.log("Server running on port 8001");
});
app.get("/ur", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.get("/playlist",async (req,res,next)=>{
    const playlist = await db.getPlaylist();
    res.status(200).json({playlist});
})