import 'bootstrap/dist/css/bootstrap.min.css';

import {useNavigate} from 'react-router-dom'

import styles from "./NovoProjeto.module.css"

import FormProjeto from '../projeto/FormProjeto';

function NovoProjeto(){

    const navigate=useNavigate()//para redirecionarmos o usuario

    /*essa será a função que iremos passar, dizendo que será para criar um novo projeto */
    function createNewProject(projeto){
        //aqui estamos inicializando essas propriedades, já que elas não são passadas no forms e sim editadas posteriormente
        projeto.orcamento_atual=projeto.orcamento_inicial
        projeto.servicos=[]

        fetch(`http://localhost:5000/projetos`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(projeto),//envia o projeto como objeto JSON
        }).then((resposta_servidor)=>resposta_servidor.json()).then((data)=>{

            console.log(`Dados que serão enviados pela função createNewProject: ${data}`)
            navigate('/projetos')

        }).catch((erro_servidor)=>console.log(`Erro do servidor: ${erro_servidor}`))

    }

    return(
        <div>
            <h1 className={styles.titulo}>Novo projeto</h1>
            <FormProjeto handleSubmit={createNewProject} btnText="Criar projeto"/>
        </div>
    )
}

export default NovoProjeto