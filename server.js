const express= require ('express')
const app=express()
const workingHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hourOfDay = now.getHours();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
      
      next();
    } else {
      res.send('This web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  };

app.use(workingHoursMiddleware);

app.use(express.static(__dirname+"./static"))
app.get("/style1.css" ,(req,res)=>{
    res.sendFile(__dirname+ "/static/style1.css")
})
app.get("/style2.css" ,(req,res)=>{
    res.sendFile(__dirname+ "/static/style2.css")
})
app.get("/style3.css" ,(req,res)=>{
    res.sendFile(__dirname+ "/static/style3.css")
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/static/home.html")
})
app.get("/ourservices",(req,res)=>{
    res.sendFile(__dirname+"/static/ourservices.html")
})
app.get("/contactus",(req,res)=>{
    res.sendFile(__dirname+"/static/contactus.html")
})

const PORT=5000
app.listen(PORT,console.log("listening on port:",PORT))