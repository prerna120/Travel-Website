const express=require('express');
const path=require('path');
const fs=require('fs');
const port=80;
const app=express();

app.use('/static',express.static('static'));

// setting views engine
app.set('view engine','pug');
app.use(express.urlencoded());

// setting view directory in which,it has to find the pug file

app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});


app.get('/index',(req,res)=>{
    res.status(200).render('index.pug');
});


app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
});


app.get('/bhopal',(req,res)=>{
    res.status(200).render('bhopal.pug');
});


app.get('/jaipur',(req,res)=>{
    res.status(200).render('jaipur.pug');
});


app.get('/about',(req,res)=>{
    res.status(200).render('about.pug');
});


app.post('/contact',(req,res)=>{
    console.log(req.body);

    //storing data in a file
    let name=req.body.username;
    let age=req.body.email;
    let phoneno=req.body.phone;
    let mes=req.body.message;
    let custId=`Username:${name}, Age:${age}, Phone No: ${phoneno} , Message: ${mes} \n`;
    fs.appendFileSync('htmlDataStoring.txt',custId);



    const param={'message': 'Your form has been submitted successfully'};
    res.status(200).render('submit.pug',param);
});


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
