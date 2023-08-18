import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';

import styles from './Projetos.module.css'

import Loading from "../layout/Loading"
import CardProjeto from '../projeto/CardProjeto';



function Projetos(){

    const [projetos,setProjetos]=useState([])//com o useState a gente vai carrgar os projetos, será
    //aqui que eles ficaram armazenados
    const [removeLoading,setRemoveLoading]=useState(false)
    const [timeDelay, setTimeDelay]=useState(50)
    const [isPesquisando, setIspesquisando]=useState(false)
    const [projetoPesquisado, setProjetoPesquisado]=useState("")
    const [projetosPesquisados, setProjetosPesquisados]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/projetos',{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            },

        }).then((resposta_servidor)=>resposta_servidor.json()).then((data)=>{
            setProjetos(data)//carrega os dados para o array de objetos
            console.log("dados carregados para o array")
            setRemoveLoading(true)
        }).catch((erro_servidor)=>console.log(`Erro ao carregar os dados:${erro_servidor}`))
    },[])

    function removeProject(id){
        fetch(`http://localhost:5000/projetos/${id}`,{
                method:"DELETE",
                headers:{
                    'Content-type':"application/json",
                },
            }).then((resposta)=>resposta.json())
            .then(()=>{
                setProjetos(projetos.filter((projeto)=>projeto.id!==id))
                //setProjectMessage(`Projeto removido com sucesso!`)
                
            })
            .catch((erro)=>console.log(erro))
        
    }

    function searchProjects(e){
        if(e.target.value==''){
            setIspesquisando(false)
            console.log(`Não tem projeto pesquisado`)
        }else{
            console.log(`Pesquisando: ${e.target.value}`)
            setProjetoPesquisado(" ")
            setProjetoPesquisado(prevSatet=>e.target.value)
            setIspesquisando(true)
            console.log(`Projeto pesquisado: ${projetoPesquisado}`)
            setProjetosPesquisados(projetos.filter((projeto=>projeto.nome_projeto==projetoPesquisado)));
            
        }

    }

    return(
        <div>
            <h1 className='fs-1 mt-3'>
                Pesquisar projetos: <input type='text' placeholder='Propaganda...' className={styles.search} onChange={searchProjects}/>
            </h1>

            {!removeLoading && <Loading/>}{/*aqui nós estaremos bloqueando o contéudo até tudo for carregado*/}
            {removeLoading && projetos.length===0 &&(
                <p className='fs-2'>Nenhum projeto encontrado</p>
            )}

            <div className='container-fluid my-5'>
            <div className={styles.div_card}>
            {isPesquisando && 
                projetosPesquisados.map((projeto)=>
                <CardProjeto
                nome={projeto.nome_projeto}
                categoria={projeto.categorias.name}
                descricao={projeto.descricao_projeto}
                orcamento_inicial={projeto.orcamento_inicial_projeto}
                id={projeto.id}
                handleRemove={removeProject}
                delay={timeDelay}
                />
                )
            }
            
            {projetos.length>0 && !isPesquisando &&
            projetos.map((projeto)=>
            <CardProjeto
            nome={projeto.nome_projeto}
            categoria={projeto.categorias.name}
            descricao={projeto.descricao_projeto}
            orcamento_inicial={projeto.orcamento_inicial_projeto}
            id={projeto.id}
            handleRemove={removeProject}
            delay={timeDelay}
            />
            )}
            
            </div>
        </div>
        </div>
    )
}

export default Projetos