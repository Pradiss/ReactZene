const Cadastro = () => {
    return (
    <>
        <body class='bg-lite'>

            <section class="container ">

                
                <div class="row d-flex justify-content-center py-5  ">

                    <div class="card col-11 col-md-10 col-lg-8 col-xl-8 py-5 rounded-5 p-5 shadow ">
                        <div class=" text-center">
                            <h4 class="fw-bold text-center  text-uppercase ">Faça seu cadastro  </h4>
                            <p>Cadastre-se</p>
                        </div>
                        
                        <form id="form1" name="form1" method="post" action="<?= $baseUrl ?>/perfil/atualizar">
                        
                        
                        <div class='p-3 d-flex '>
                            <input type="text" id="nome"  name="nome" class="form-control p-3 me-3 rounded-5" placeholder="Digite seu Nome" required/>
                                <div>
                                    <input type="number" id="idade"  name="idade" class="form-control p-3 rounded-5"  placeholder=" Idade" required/>
                
                            </div> 
                        </div>
                        
                        <div class='p-3 '>
                            <input type="usuario" id="usuario"  name="usuario" class="form-control p-3  rounded-5" placeholder="Crie seu Usuario" required/>
                        
                        </div>
                        <div class='p-3  '>
                            <input type="password" id="senha"  name="senha" class="form-control p-3  rounded-5" placeholder="Crie sua senha" required/>
                        
                        </div>

                        <div class='p-3'>
                            <input type="email" id="email"  name="email" class="form-control p-3 rounded-5" placeholder="Digite seu Email" required />
                        </div>
                        
                        <div class='p-3 d-flex'>
                            <input type="text" id="cidade"  name="cidade" class="form-control p-3 me-3 rounded-5" placeholder="Digite sua Cidade"/>
                            
                            <div>
                                <input type="text" id="uf"  name="uf" class="form-control p-3 rounded-5 " placeholder="Estado"/>

                            </div>
                        </div>
                        
                        
                        
                        <div class="my-3 ">
                            <button type="submit" id="btnAcessar" name="btnAcessar" class=" rounded-5 w-100 fw-bold text-white btn btn-lg btn-dark">Cadastrar-se</button>

                        </div>
                        <input type="hidden" name="acao" value=""/>
                        
                        </form>
                        
                        <div class="text-center mt-4">
                        <small class="mb-0">já tem uma conta na Zene? </small>
                        <a href="/login" class="fw-bold text-dark">Faça seu login</a>
                        <ul class="list-unstyled mt-5">
                            <li class="mb-2">
                            <i class="bi bi-instagram fs-4 me-3"><a href="[[base-url]]https://www.instagram.com/accounts/login/?hl=en" ></a></i>
                        
                            <i class="bi bi-facebook fs-4  me-3"><a href="https://www.facebook.com/login/" ></a></i>

                            <i class="bi bi-google fs-4  me-3"><a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ifkv=ASSHykpEkvcJgwwIGuo99h70xtliPOxx8fLRHSa0oKyprGQnCcUxzEBAk3HWoi6AWDLOILvv9Xd1&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1074482830%3A1741301504264501&ddm=1" ></a></i>
                            </li>
                        </ul>
                        </div>
                
                    </div>

                </div>

                <section>
                    <div class="row d-flex justify-content-center">

                    </div>
                        
                </section>

            </section>

            </body>
    </>
    )
}

export default Cadastro