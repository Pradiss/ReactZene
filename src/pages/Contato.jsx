import Header from "../componetes/Header"
import Footer from "../componetes/Footer"

const Contato = () =>{
    return (
    <>
    <Header/>
        <section className="container espacamento">
            <div className="row">
                <div className="col-6 ">
                    <form id="form1" name="form1" method="post" action="#">

                        <div className='p-3  '>
                        <h2 className="display-3 "> Contato</h2>
                        <p className="mb-5">Send a message and our team will get back to within 24 hrs</p>
                            <input type="nome" id="nome"  name="nome" className="form-control p-3 me-3 rounded-5 bg-tertiary" placeholder="Digite seu Nome"/>
                        </div>  
                        <div className='p-3 '>
                            <input type="email" id="email"  name="email" className="form-control p-3 me-3 rounded-5" placeholder="Digite sua E-mail"/>
                                
                        
                        </div>  
                        <div className='p-3 '>
                            <textarea type="text" id="descricao"  name="descricao" className="form-control p-3 me-3 rounded-5" placeholder="Deixe sua Mensagem"></textarea>                                
                        
                        </div>  
                                        

                                            
                        <div className="m-3">
                            <button type="submit" id="btnAcessar" name="btnAcessar" className=" rounded-5 w-100 fw-bold text-white btn btn-lg btn-dark">Envie sua Mensagem</button>

                        </div>

                    </form>
                </div>
                <div className="col-6">
                    <div className=" bgGray rounded-5 p-5">
                        <h5 className="text-secondary text-regular">Localização</h5>
                        <hr/>



                        <h5 className="text-secondary text-regular">Horário de Funcionamento</h5>
                        <hr/>
                        <h4> Segunda a Sexta <br/>09:00 ate as 18:00</h4>
                        <h4 className="text-secondary mb-4">Nosso time de suporte é 24Hrs</h4>


                        <h5 className="text-secondary text-regular">Nosso contato</h5>
                        <hr/>

                        <h4>(19) 98911-1857</h4>
                        <h5 className="text-secondary mb-4">Zen@gmail.com</h5>

                        <ul class="list-unstyled">
                        <li class="mt-5">
                            <i class="bi bi-instagram fs-3 me-3"><a href="#!" class="text-white"></a></i>
                        
                            <i class="bi bi-facebook fs-3  me-3"><a href="#!" class="text-white"></a></i>

                            <i class="bi bi-whatsapp fs-3  me-3"><a href="#!" class="text-white"></a></i>

                            <i class="bi bi-linkedin fs-3  me-3"><a href="#!" class="text-white"></a></i>
                        </li>
                    
                    </ul>


                    </div>

                </div>
            </div>
        
        </section>    

        <Footer/>
    </>
    )
}

export default Contato