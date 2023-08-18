import styles from "./CardProjeto.module.css"

import {HiOutlinePencilAlt} from "react-icons/hi"
import {BsFillTrashFill} from "react-icons/bs"
import {BsFillEyeFill} from "react-icons/bs"
import {BsFillEyeSlashFill} from "react-icons/bs"

import { useEffect } from "react"
import { Number, Currency } from "react-intl-number-format"


import AOS from 'aos';
import 'aos/dist/aos.css';


import {Link} from 'react-router-dom'
import { useState } from "react"

function CardProjeto({nome, descricao, orcamento_inicial, categoria,id, handleRemove, delay}){ //o id servirá para editarmos o projeto ou excluirmos

    const [showDescription, setShowDescription]=useState(false)

    useEffect(() => {
        AOS.init();
      }, [])

    function toggleShowDescription(){
        showDescription?setShowDescription(false):setShowDescription(true)
    }

    const remove=(e)=>{
        handleRemove(id)
    }


    return(
        <div className={styles.card} data-aos-delay={delay} data-aos="fade-down" data-aos-once="true">
            <div className={styles.div_titulo}>
                
                <p className={styles.titulo}>{nome}</p>
             
                <p className={styles.btns} onClick={remove}><BsFillTrashFill/></p>
                <Link to={`/projeto/${id}`}><p className={styles.btns}><HiOutlinePencilAlt/></p></Link>
     
            </div>
            <div className={styles.div_categoria}>
                <p> {categoria}</p>
            </div>
            
            <div className={styles.div_orcamento}>
                <p>Orçamento:<Currency locale="pt-br" currency="BRL">{orcamento_inicial}</Currency></p>
            </div>
            <div className={styles.div_descricao}>
            <p><span onClick={toggleShowDescription}>{showDescription?<BsFillEyeSlashFill/>:<BsFillEyeFill/>}</span>Descrição:
            </p>
            {showDescription && <p className={styles.descricao_text}>{descricao}</p>}
            </div>
            <div className={styles.div_servicos}>
                <p>Serviços: Não há serviços disponíveis ainda</p>
            </div>
            
        </div>
    )
}

export default CardProjeto