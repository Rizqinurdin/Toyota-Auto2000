import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import Icon from "../assets/img/icon.png"
import { navLinks } from "../data/index"
import { NavLink } from "react-router-dom"

const NavBarComponent = () => {

    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

    return (
        <div>
            <Navbar expand="lg" fixed="top" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Icon} alt="icon-img" className="w-50" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            {navLinks.map((link) => {
                                return (
                                    <div className='nav-link' key={link.id}>
                                        <NavLink to={link.path} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        } end>{link.text}</NavLink>
                                    </div>
                                );
                            })}
                        </Nav>
                        <div>
                            <button className="btn btn-outline-danger rounded-1">Book Now</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavBarComponent