import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom'
import {BsFillBoxSeamFill} from 'react-icons/bs'
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'

import style from "./NavigationBar.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(){
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className={style.logo}><span className={style.logo_icon}><BsFillBoxSeamFill/></span> Caixa de Projetos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto  gap-3 w-100 d-flex justify-content-end" >
              <Link to="/" className={style.item_navbar}><AiFillHome/>Home</Link>
              <Link to="/projetos" className={style.item_navbar}><AiFillProject/>Projetos</Link>
              <Link to="/novoprojeto" className={style.item_navbar}><AiFillPlusCircle/>Novo Projeto</Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavigationBar