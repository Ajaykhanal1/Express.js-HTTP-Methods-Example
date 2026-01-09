const express = require('express');
const app = express();

app.use(express.json());

let students =[
    {id:1,name:"Ram"},
    {id:2,name:"Shyam"}
];

app.get('/students',(req,res)=>{
    res.json(students);
});

app.post('/students',(req,res)=>{
    const newStudent ={
        id:students.length +1,
        name: req.body.name
    };
    students.push(newStudent);
    res.json(newStudent);
});

app.put('/students/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    students.forEach(s=>{
        if(s.id=== id){
            s.name= req.body.name;
        }
    });
    res.json({message:"Student Updated"});
});

app.delete('/students/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    students = students.filter(s=>s.id !== id);
    res.json({message:"Student deleted!"})
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000 ......")
})