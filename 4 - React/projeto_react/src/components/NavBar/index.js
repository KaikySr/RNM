import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavContent, NavLink } from "./styled";

export default function NavBar(){    
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <NavContent className="me-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">Sobre</NavLink>
                        <NavLink to="/addPayment">Adicionar Pagamento</NavLink>
                        <NavLink to="/extract">Extrato</NavLink>
                    </NavContent>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )   
}