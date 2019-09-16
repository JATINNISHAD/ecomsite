import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem} from 'reactstrap';

const NavigationBar=()=>{
    const [toggle,setToggle]=useState(false);
    const handleToggle=()=>{
        setToggle(!toggle);
    }

    return(
        <React.Fragment>
            
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">
                    Giftshub
                </Link>
                <NavbarToggler onClick={handleToggle}/>
                <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link" >
                               <i className="fas fa-list"></i> Products
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/cart" className="nav-link">
                               <i className="fas fa-shopping-cart"></i> Cart
                            </Link>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default NavigationBar;