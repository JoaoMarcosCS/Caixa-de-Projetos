import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from "react-icons/bs"

import style from './Footer.module.css'


function Footer(){
    return(
        <div className={style.footer}>
            <p>Copyright&copy;2023 Caixa de projetos. Desenvolvido por
            <p className={style.footer_nome}>João Marcos</p></p>
            <div className={style.footer_link}>
            <p><a href="http://www.linkedin.com/in/joão-marcos-cândido-da-silva-58b29227a" target='_blank'><BsLinkedin/>Linkedin</a></p>
            <p><a href="https://github.com/JoaoMarcosCS" target='_blank'><BsGithub/>GitHub</a></p>
            </div>

        </div>
    )
}

export default Footer