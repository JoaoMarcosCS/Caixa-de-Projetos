import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillBoxSeamFill} from 'react-icons/bs'

import ImagemBanner from '../../img/banner1.png'
import ImagemAbout1 from "../../img/about1.png"
import ImagemAbout2 from "../../img/about2.png"

import AOS from 'aos'
import 'aos/dist/aos.css';

import Seta from "../layout/Seta"

import style from './Home.module.css'
import { useEffect } from 'react';

function Home(){

    useEffect(()=>{
        AOS.init()
    },[])

    return(
        <div className='row mx-3 py-5'>
            <div data-aos="fade-right" className='col-sm-6  d-flex justify-content-center align-items-center'>
                <div><span className={style.banner1}>Caixa de</span><br/>
                <span className={style.banner2}><span><BsFillBoxSeamFill/></span>Projetos</span>
                </div>
            </div>
            <div data-aos="fade-left" className='col-sm-6 '>
                <img className='img-fluid' src={ImagemBanner}/>
            </div>
            <Seta/>
            <div data-aos="fade-right" className="row d-flex justify-content-center align-items-center pt-5">
                <p className='fs-1'>Sobre</p>
                <p className='fs-2 col-xxl-12 col-md-5 '>O site <span>caixa de projetos</span> é um gerencidador financeiro
                de projetos, onde podem ser realiadas operações de criação, exclusão, edição e seleção 
                de projetos.</p>
                <div data-aos="fade-left" className='col-xxl-12 col-md-6 '>
                <img className='img-fluid' src={ImagemAbout1}/>
                </div>
            </div>
            <Seta/>
            <div data-aos="fade-right" className="row d-flex justify-content-center align-items-center pt-5">
            <div  className='col-xxl-12 col-md-6 '>
                <img className='img-fluid' src={ImagemAbout2}/>
            </div>
                <p data-aos="fade-left" className='fs-2 col-xxl-12 col-md-5 '>Os projetos possuem um orçamento inicial que dele será descontado
                os serviços que o projeto fornecerá. Além disso,
                 você pode classificar seus projetos nas seguintes categorias:<br/>
                <br/>Planejamento
                <br/>Desenvolvimento
                <br/>Logistica
                <br/>Infraestrutura
                <br/>Design
                </p>
            </div>
            <Seta/>
            <div data-aos="fade-down" className="row d-flex justify-content-center align-items-center pt-5">
                <p className='fs-2 col-xxl-12 col-md-8 '>
                    Em suma, o site foi desenvolvido a fim de demonstrar conhecimentos nas operações básicas
                    de CRUD em um banco de dados não relacional como é o json server. Além de também demonstrar conhecimentos
                    em React JS junto com Bootstrap.
                </p>
            </div>
        </div>
    )
}

export default Home