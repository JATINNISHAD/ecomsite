import React,{useContext} from 'react';
import styled from 'styled-components';
import {ProductContext} from '../../contextt';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

const Modal = ()=>{
    const value  = useContext(ProductContext);
    const modalOpen = value.megaState.modalOpen;
    const toggleModal = value.toggleModal;
    const {id,img,title,price} = value.megaState.modalProduct;

    if(!modalOpen){
        console.log(modalOpen);
        return null;
    }else{
        console.log('worked modal');
        return(
            <ModalContainer >
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5 ">
                            <h5>item added to the cart</h5> 
                            <img src={img} className="img-fluid" alt={title} />
                            <h5>{title}</h5>
                            <h5 className="text-muted" >price : ${price}</h5>
                            <Link to="/">
                                <ButtonContainer onClick={()=>toggleModal(id)} >
                                    Store
                                </ButtonContainer>
                            </Link>
                            <Link to="/cart">
                                <ButtonContainer cart onClick={()=>toggleModal(id)} >
                                    Go to cart
                                </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        );
    }
}

export default Modal;

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-item:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    }
`