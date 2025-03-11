import React, {useState, useEffect } from "react"
import Footer from "../componetes/Footer"
import Header from "../componetes/Header"
import axios from "axios";

const Categorias = () => {


    const [usuarios, setUsuarios] = useState([])
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/usuarios") 
             .then((resposta) => setUsuarios(resposta.data))
             .catch((error) => console.error("ERROR", error))
     }, [])

   
    return (
    <>
        <Header/>
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4 rounded-5 p-4 shadow">
                            <h2 className="display-5 fw-bold"><i className="bi bi-x-diamond-fill me-2"></i>Filtros</h2>
                            
                            <div class="input-group mt-4">
                                <input type="text" class="form-control rounded-start-5" value=""/>
                                <span class="input-group-btn">
                                    <button class="btn btn-white border rounded-end-5" type="button"><i class="bi bi-search"></i></button>
                                </span>
                            </div>
                            <div className="mt-4 ">
                                <h4 className="fw-bold ">Categorias</h4>

                            </div>
                        </div>
                        <div className="col-md-8 p-4">
                            <h2 className="display-5 fw-bold"> Resultado</h2>
                            <hr/>
                            <div className="row">
                                    
                                
                                {usuarios.map((objUsuarios)=>(
                                <div className='col-12 col-sm-6 col-md-6 col-lg-4 p-2 '>
                                    <div className='card rounded-5 p-3 shadow ' >
                                    <img src={objUsuarios.foto} className='card-img-top rounded-5' alt='...'/>
                                        <div className='card-body text-center'>
                                            <h4 className='card-title text-blak'>{objUsuarios.nome}</h4>
                                            <p className='text-secondary mb-1 text-dark '>{objUsuarios.idInstrumento} | </p>
                                            
                                            <p className='card-text text-secondary'>{objUsuarios.cidade} | {objUsuarios.preco}</p>
                                            <a href="" className='btn btn-warning btn-lg rounded-4'>Perfil</a>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        <Footer/>
    </>
    )
}

export default Categorias