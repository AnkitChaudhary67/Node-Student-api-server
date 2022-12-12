const router=require("express").Router();
const e = require("express");
const studentArray=require("../InitialData");
console.log(studentArray);
let id=8;
router.get("/",(req,res)=>{
    res.json(studentArray)
})
router.get("/:id", (req,res)=>{
    let result=studentArray.find(e=> e.id==req.params.id)
    if(result){
        res.json({...result})
    }else{
        res.statusCode(404).json("Get Failed,id not found or invalid")
    }
})
router.post("/",(req,res)=>{
   console.log(req.body)
   if(req.body.name&&req.currentClass&&req.body.divison){
       studentArray.push({id:id,...req.body})
       res.json({id:id})
       id++;
   }else{
       res.status(400).json("Post Failed !! Incomplete details to post")
   }
})
router.put("/",(req,res)=>{
    console.log(req.params.id)
   let targetObject=studentArray.find(e=> e.id==req.params.id)
   console.log(targetObject)
   if(req.body.name||req.currentClass||req.body.divison&& targetObject){
       let targetIndex=studentArray.findIndex(e=> e.id==req.params.id)
       studentArray[targetIndex]={...targetObject,...req.body}
   }
    else{
        res.status(400).json("Update Failed !! Incomplete detail/invalid id")
    }
 })

 router.delete("/:id",(req,res)=>{
    let targetIndex=studentArray.findIndex(e=> e.id==req.params.id)
    if(targetIndex){
        studentArray.splice(targetIndex,1)
        res.json("Sucessfully deleted")
    }else{
        res.status(404).json("Delete Failed !! Invalid id")
    }
 })