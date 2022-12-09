const express= require('express');
const router= express.Router();

router.get('/',(req, res)=>{
    res.render("home",)
})

router.get('/auth/login',(req, res)=>{
    res.render("auth/login",)
})

router.get('/admin/menuAdmin',(req, res)=>{
    res.render("admin/menuAdmin",)
})

router.get('/usuarios',(req, res)=>{
    res.render("user/listUser",)
})


module.exports=router;