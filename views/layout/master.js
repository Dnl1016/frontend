<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>Red aliados</title>
    <link rel="shortcut icon"type="image/png" href="../../lib/img/logo grupo aliados.png"  />
    <link rel="stylesheet" href="../../lib/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../lib/css/feathericon.min.css">
    <link rel="stylesheet" href="../../lib/css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
     integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="../../lib/css/datatables.min.css" rel="stylesheet">
</head>
<body>
    <!-- navbar superior -->
    <div class="main-wrapper">
        <div class="page-wrapper">
            <div class="content container-fluid " >
            <!-- cabecera -->
                <div class="header" >
                <!-- icono con titulo -->
                    <div class="header-left "  >
                        <a href="" class="logo"> <img src="../../lib/img/logo grupo aliados.png"  style="width: 30%;  "> <span class="logop">Red-Aliados</span></a>
                        <br>
                        <a href="../admin/menuAdmin.html" class="logo logo-small"> <img  src="../../lib/img/logo grupo aliados.png"   style="font-size:30px;  margin-top: -50px; " ></a>
                    </div>
                    <a href="javascript:void(0);" id="toggle_btn">   <i class="material-icons p "  style="font-size:30px;  margin-top: -35px; padding-top: 100%;  ">dehaze</i></a>
                    <a class="mobile_btn" id="mobile_btn"></a>
            
                    <div class="d-flex flex-row-reverse bd-highlight" id="hola2">
                        <div class="p-2 bd-highlight">
                            <div class="actionD">
                                <div class="profile" onclick="menuToggle();">
                                    <a class="nav-link active p " aria-current="page" href="../views/auth/login.html" type="submit" style="margin-left:1rem ;  margin-top: -60px;"></a>
                                    <i class="material-icons p "  style="font-size:50px;  margin-top: -35px; padding-top: 160%;  ">account_circle</i>
                                </div>
                                <div class="menuImg">
                                    <h3>Hola<br><span>Administrador</span></h3> 
                                    <ul>
                                        <li><i class="far fa-user-circle"></i><a href="#"> Perfil</a></li>
                                        <li><i class="fas fa-sign-out-alt"></i><a href="../auth/login.html">Cerrar sesión</a></li>
                                    </ul>
                                </div>
                            </div>
                            <script>
                                function menuToggle() {
                                    const toggleMenu = document.querySelector('.menuImg');
                                    toggleMenu.classList.toggle('active');
                                }
                            </script>
                        </div>
                    </div>
            </div>
            <!-- fin cabecera -->
            <!-- nav izquierdo -->
            <div class="sidebar shadow-sm " id="sidebar">
                <div class="sidebar-inner slimscroll">
                    <div id="sidebar-menu" class="sidebar-menu">
                        <ul>
                            <li class=""> <a href="../admin/menuAdmin.html"><i class="fas fa-home"></i>
                                    <span>Inicio</span></a> </li>
                            <li class="list-divider"></li>
                            <li class="submenu"> <a href="#"><i class="fas fa-key"></i> <span>Privilegios</span>
                                    <span class="menu-arrow"></span></a>
                                <ul class="submenu_class" style="display: none;">
                                    
                                    <li><a href="../roles/listRoles.html"> Roles </a></li>
                                    <li><a href="../permisos/listPermisos.html"> Permisos </a></li>
                                </ul>
                            </li>
                            <li class="submenu"> <a href="#"><i class="fas fa-user"></i></i></i> <span> Usuarios
                                    </span> <span class="menu-arrow"></span></a>
                                <ul class="submenu_class" style="display: none;">
                                    <li><a href="../user/listUser.html"> Usuarios </a></li>
                                    <li><a href="../personas/listPersonas.html"> Personas </a></li>
                                    <li><a href="../talentos/listTalentos.html"> Talentos </a></li>
                                    <li><a href="../empresas/listempresas.html"> Empresas </a></li>
                                </ul>
                            </li>
                            <li class="submenu"> <a href="#"><i class="fas fa-lightbulb"></i> <span> Proyectos
                                    </span> <span class="menu-arrow"></span></a>
                                <ul class="submenu_class" style="display: none;">
                                    <li><a href="../ideas/listIdea.html"> Ideas </a></li>
                                    <li><a href="../proyectos/listProyectos.html"> Proyectos </a></li>
                                </ul>
                            </li>
                            <li class="submenu"> <a href="#"> <i class="fas fa-user-tie"></i></i> <span>Aliados
                                    </span> <span class="menu-arrow"></span></a>
                                <ul class="submenu_class" style="display: none;">
                                    <li><a href="../aliados/listAliados.html"> Aliados </a></li>
                                    <li><a href="../lineas/listLineas.html"> Lineas </a></li>
                                </ul>
                            </li>
                            <li class="submenu"> <a href="#"><i class="fas fa-cog"></i></i></i> <span>Configuraciones
                            </span> <span class="menu-arrow"></span></a>
                        <ul class="submenu_class" style="display: none;">
                            <li><a href="../tipo_documento/listDocu.html"> Tipo documento </a></li>
                           
                        </ul>
                    </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- fin nav izquierdo -->		
			<br><br><br>
            
            </div>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="../../lib/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="../../lib/js/script.js"></script>

    <!--  datatables -->
    <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap5.min.js"></script> 
    <!-- Bootstrap core JavaScript -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="../Layout/vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="../../lib/js/datatables.min.js"></script>
    <script src="../../lib/js/datatables.js"></script>  
    <script src="../../js/listAdmin.js"></script>
</body>