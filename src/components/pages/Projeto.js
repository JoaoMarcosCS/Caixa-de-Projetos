import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Loading from "../layout/Loading"

import styles from "./Projeto.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import FormProjeto from "../projeto/FormProjeto";

function Projeto(){

    const {id}=useParams()
    const [projeto,setProjeto]=useState([])
    const [showProjectForm,setShowProjectForm]=useState(false)
    const navigate=useNavigate()

    console.log(`URL:${id}`)

    useEffect(()=>{
        fetch(`http://localhost:5000/projetos/${id}`,{
            method:"GET",
            headers:{
                'Content-type':'application/json',
            },
        }).then((resposta)=>resposta.json()).then((data)=>{
            setProjeto(data)
            console.log("Teste:"+data.nome_projeto)
            
        }).catch((erro)=>{console.log(`Erro:${erro}<br>URL:${id}`)})
    },[id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function editPost(projeto){
        console.log(`${projeto.nome_projeto}`)

        //validação pra ver se tem dinheiro
        
        fetch(`http://localhost:5000/projetos/${projeto.id}`,{
            method:`PATCH`,//essa rota só atualiza o que for mudado, diferente do UPDATE wue irá mudar tudo
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(projeto)
        }).then(resposta=>resposta.json()).then((data)=>{
            setProjeto(data)
            setShowProjectForm(false)
            navigate("/projetos")
        }).catch(erro=>console.log(erro))
    }


    return(
        <>
            {projeto.nome_projeto?(
                <div className='container-fluid'>
                    <h1>Editar</h1>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <FormProjeto
                        handleSubmit={editPost}
                        btnText={'Concluir edição'}
                        projetoData={projeto}
                    />
                    </div>
                   
                </div>
                
            ):(<Loading/>)}
        </>
    )
}

export default Projeto