let express=require('express')

let router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})


router.get('/inquiry',(req,res)=>{
    res.render('inquiry')
})


router.get('/training',(req,res)=>{
    res.render('training')
})

module.exports=router