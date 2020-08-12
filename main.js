

const express = require('express')
const path = require('path')




var app = express()
var port = process.env.PORT || 3000;
// app.get('/',(req,res)=>{
// res.send('wtf')
// })

app.use(express.static(path.join(__dirname, "dist")))

// console.log(path.join(__dirname, "dist")
// )
app.listen(port,()=>{
console.log(`app is up on port ${port}`)
})