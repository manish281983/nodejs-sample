const express= require('express');
const app = express();

app.use('/',(req,res)=> {
    return res.send('Hello World')
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listeninig....${port}`));

