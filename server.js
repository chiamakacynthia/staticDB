require("dotenv").config();
const express = require("express");
const port = 3001
const app = express()
app.use(express.json())


const studentData = [
    {id:1, name:"chiamaka", course:"biology"},
    {id:2, name:"Dera", course:"geography"},
    {id:3, name:"Mayo", course:"chemistry"},
    {id:4, name:"Taiwo", course:"design"},
    {id:5, name:"kenny", course:"account"},
    {id:6, name:"judith", course:"boiTech"},
    {id:7, name:"justin", course:"aviator"}
]
// console.log(studentData)



app.get("/", (req, res) =>{
    res.send("server is ready")
})

app.get("/api/studentdata", (req, res) =>{
    res.status(200).json(studentData)
})

app.post("/api/studentdata", (req, res) =>{
    if(!studentData){
        console.log("no collection as such")
    }
    const newStudent = {
        id: studentData.length + 1,
        name: req.body.name,
        course: req.body.course
    }
    studentData.push(newStudent)
    res.status(200).json({message:"done", data: studentData})
    
})

app.get("/api/student/:id", (req, res)=>{
    const studentId = studentData.find((student)=>student.id === parseInt(req.params.id))
    if(!studentId){
        console.log(`no user with this id: ${req.params.id}`)
    }
    res.status(200).json({message:`student id: ${req.params.id}`, data: studentId})
})
app.listen(port, ()=>{
    console.log(`server is listening to: ${port}`)
})