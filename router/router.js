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

// usuarios
router.get('/usuarios',(req, res)=>{
    res.render("user/listUser",)
})

router.get('/usuario/edit',(req, res)=>{
    res.render("user/editUser",)
})

router.get('/usuario/create',(req, res)=>{
    res.render("user/createUser",)
})

router.get('/usuario/createPerso',(req, res)=>{
    res.render("user/CrearPersona",)
})

// tipo documento

router.get('/tipodocumentos',(req, res)=>{
    res.render("tipo_documento/listDocu",)
})

router.get('/tipodocumento/create',(req, res)=>{
    res.render("tipo_documento/crearDocu",)
})

router.get('/tipodocumento/edit',(req, res)=>{
    res.render("tipo_documento/editDocu",)
})





// talentos
router.get('/talentos',(req, res)=>{
    res.render("talentos/listTalentos",)
})

router.get('/talento/edit',(req, res)=>{
    res.render("talentos/editTalento",)
})

router.get('/talento/create',(req, res)=>{
    res.render("talentos/createTalento",)
})

router.get('/talento/createEmpre',(req, res)=>{
    res.render("talentos/CreateTalentEmpresa",)
})

// roles
router.get('/roles',(req, res)=>{
    res.render("roles/listRoles",)
})

router.get('/rol/edit',(req, res)=>{
    res.render("roles/editRol",)
})

router.get('/rol/create',(req, res)=>{
    res.render("roles/createRol",)
})


// roles
router.get('/roles',(req, res)=>{
    res.render("roles/listRoles",)
})

router.get('/rol/edit',(req, res)=>{
    res.render("roles/editRol",)
})

router.get('/rol/create',(req, res)=>{
    res.render("roles/createRol",)
})

// proyectos
router.get('/proyectos',(req, res)=>{
    res.render("proyectos/listProyectos",)
})

router.get('/proyecto/edit',(req, res)=>{
    res.render("proyectos/editProyecto",)
})

router.get('/proyecto/create',(req, res)=>{
    res.render("proyectos/createProyecto",)
})


// personas
router.get('/personas',(req, res)=>{
    res.render("personas/listPersonas",)
})

router.get('/persona/edit',(req, res)=>{
    res.render("personas/editPersona",)
})

router.get('/persona/create',(req, res)=>{
    res.render("personas/createPersona",)
})

// permisos
router.get('/permisos',(req, res)=>{
    res.render("permisos/listPermisos",)
})

router.get('/permiso/edit',(req, res)=>{
    res.render("permisos/editPermiso",)
})

router.get('/permisos/create',(req, res)=>{
    res.render("permisos/createPermiso",)
})



module.exports=router;