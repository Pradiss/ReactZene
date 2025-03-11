import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../componetes/Header";
import Footer from "../componetes/Footer";

const Perfil = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/usuarios")
            .then((resposta) => setUsuarios(resposta.data))
            .catch((error) => console.error("ERROR", error));
    }, []);

    return (
    <>
        <Header/>

        <main className="bg-lite py-5">
            <div className="container">
                <div className="main-body">
                    <div className='row gutters-sm'>
                        <div className='col-sm-12 col-md-4 '>
                            <div className='card rounded-5 '>
                                <div className='card-body '>
                                    <div className='d-flex flex-column align-items-center text-center'>
                                        <img src='$foto'  className='rounded-5 shadow w-100'/>
                                        <div className='mt-3 p-4 text-light'>
                                        
                                        <h3 className='text-black'>{usuarios.nome}</h3>
                                        <p className='text-secondary mb-1'>{usuarios.idInstrumento}- </p> 
                                        <p className='text-secondary mb-1'>{usuarios.cidade}| {usuarios.uf}</p>
                                        
                                        </div>
                                        <div cals>
                                        <i className='mx-1 bi bi-star-fill '></i>
                                        </div>
                                        
                                        <a href='' className='btn btn-warning rounded-4 btn-lg m-4'>Contrate me</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='card  text-light rounded-5 p-3 mt-3'>
                                <ul className='list-group list-group-flush rounded-5'>
                                    <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                                    <h6 className='mb-0'><i className='mx-1 bi bi-whatsapp'></i>whatsapp</h6>
                                    <span className='text-secondary'>{usuarios.whatsapp}</span>
                                    </li>
                                    <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                                    <h6 className='mb-0'><i className='mx-1 bi bi-instagram'></i>Instagram</h6>
                                    <span className='text-secondary'>{usuarios.instagram}</span>
                                    </li>
                                    <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                                    <h6 className='mb-0'><i className='mx-1 bi bi-facebook'></i>Facebook</h6>
                                    <span className='text-secondary'>{usuarios.facebook}</span>
                                    </li>
                                </ul>
                            
                            </div>

                            </div>

                            <div className='col-md-8 '>
                            
                                <div className='card rounded-5 mb-3'>

                                    <div className='card-body '>
                                        
                                        
                                        
                                    <div id='carouselExampleCaptions' className='carousel slide'>

                                        <div className='carousel-indicators'>
                                        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                                        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
                                        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
                                        </div>

                                        <div className='carousel-inner rounded-5 '>
                                        <div className='carousel-item active'>
                                            <img src='./src/assets/bandateste1.svg' className='d-block w-100' alt='...'/>
                                            
                                        </div>

                                        <div className='carousel-item'>
                                            <img src='./src/assets/bandateste1.svg' className='d-block w-100' alt='...'/>
                                            
                                        </div>

                                        <div className='carousel-item'>
                                            <img src='./src/assets/bandateste1.svg' className='d-block w-100' alt='...'/>
                                            
                                        </div>
                                        
                                        </div>

                                        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
                                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Previous</span>
                                        </button>

                                        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
                                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Next</span>
                                        </button>

                                    </div>
                                    

                                    </div>

                                </div>

                                <div className='card rounded-5 mb-3'>

                                    <div className='card-body p-4 '>
                                        <h4 className='mb-4 fw-bold'>Sobre Mim</h4>
                                        <div className='p-4 bg-body-tertiary rounded-5'>

                                            <p className='fonti-italic mb-1'> {usuarios.descricao} </p>
                                            
                                        </div>

                                    </div>
                                </div>

                            </div>



                        </div>
                                    <div className='col-sm-12 col-md-12 ' >
                                        <div className='card text-dark  rounded-5 p-3 '>
                                            <div className='card-body rounded '>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Nome</h6>
                                                    </div>
                                                    <div className='  col-sm-9 text-secondary'>
                                                    {usuarios.nome}                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Usuario</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.usuarios}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Email</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.email}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Idade</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.idade}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>WhatsApp</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.whatsapp}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Cidade</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.cidade}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Estado</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.uf}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Instrumento</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.idInstrumento}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Categoria</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.idCategoria}
                                                    
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='col-sm-12 '>
                                                    <a className='btn btn-warning btn-lg rounded-5 p-3'  href='/perfil/editar/$idUsuario'>Editar Dados</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                  
                
        </main>

        <Footer/>
    </>
    )
};

export default Perfil;