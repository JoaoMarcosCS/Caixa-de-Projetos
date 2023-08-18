import { useEffect, useState } from "react"

import Input from "../formulario/Input"
import Select from '../formulario/Select'
import BtnSubmit from "../formulario/BtnSubmit"

import 'bootstrap/dist/css/bootstrap.min.css';

function FormProjeto({handleSubmit, projetoData, btnText}){

    const [projeto, setProjeto]=useState(projetoData || {})
    /*aqui estaremos setando o array projetos caso esse componente
    seja usado para a edição do projeto, caso contrário, ele será
    usado para criar um novo projeto, com isso nós testaremos quando
    formos carregar os dados no value do input se está vazio ou com algum dado.
    Caso esteja com dado, ele será carregado e as funções handlechange serão responsáveis
    por editar o valor caso o valor do input seja alterado Senão, caso esteja vazio, 
    ele apenas colocará vazio no value, permitindo que o usuario crie um novo projeto.
    Em relação a função do formulario, se ele irá editar ou criar, é responsabilidade
    de quem o chama dar essa função a partir do handleSubmit, que irá apenas enviar o 
    array para a função no componente manipula-lo
    */

    const [categorias,setCategorias]=useState([])
    //para pegarmos as categorias disponiveis no db

    useEffect(()=>{
        fetch('http://localhost:5000/categorias',{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        }).then((resposta_servidor)=>resposta_servidor.json())
        .then((data)=>{
            setCategorias(data)
        }).catch((erro_servidor)=>console.log(`Erro do servidor:${erro_servidor}`))
    },[])

    const submit=(e)=>{
        e.preventDefault()//evita o recarregamento da página
        handleSubmit(projeto)
    }

    function handleChange(e){
        setProjeto({...projeto,[e.target.name]:e.target.value})
        /*aqui nós estaremos modificando o dado do projeto pegando o nome da propriedade e
         seu respectivo valor 
        por isso que o input deve ter o mesmo name que a propriedade do banco de dados*/
    }

    function handleCategoria(e){
        setProjeto({...projeto,categorias:{
            id:e.target.value,
            name:e.target.options[e.target.selectedIndex].text
        }
    })
}



    return(
        <div>
            <form onSubmit={submit} className="gap-4 d-flex justify-content-center
              align-items-center flex-column mt-5 mb-5">
                <Input 
                type='text'
                label='Nome do projeto:'
                name='nome_projeto'/*precisa ter o mesmo nome do dado do banco de dados, senão vai dar conflito */
                placeholder="Ex:Propaganda Publicitária"
                value={projeto.nome_projeto?projeto.nome_projeto:''}
                /*Caso o projeto tenha algum dado(o que significa que é edição) ele será escrito no valor do input,
                caso contrário, ele será vazio e esperará a entrada do user */
                handleOnChange={handleChange}
                />
                <Input
                type='number'
                label='Orçamento inicial do projeto(R$):'
                name='orcamento_inicial_projeto'/*precisa ter o mesmo nome do dado do banco de dados, senão vai dar conflito */
                placeholder="10.000,00"
                value={projeto.orcamento_inicial_projeto?projeto.orcamento_inicial_projeto:''}
                handleOnChange={handleChange}
                />

                <Select
                name="categoria"
                options={categorias}/*veio carregado do state lá de cima do fetch para pegar as categorias */
                label="Selecione uma categoria:"
                handleOnChange={handleCategoria}
                value={projeto.categorias?projeto.categorias.id:''}

                />

                <Input
                type='text'
                label='Descrição do projeto:'
                name='descricao_projeto'/*precisa ter o mesmo nome do dado do banco de dados, senão vai dar conflito */
                placeholder=""
                value={projeto.descricao_projeto?projeto.descricao_projeto:''}
                handleOnChange={handleChange}
                />
                <BtnSubmit text={btnText}/>
            </form>
        </div>
    )
}

export default FormProjeto