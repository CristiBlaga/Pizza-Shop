import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
            const{id,img,info,price,title} = value.detailProduct;   
            return (
                <div className="container py-5">
                  {/* title */} 
                  <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
                </div>    
                </div> 
                {/*end title*/}
                {/*product info*/}
                <div className="row">
                <div className="col-10 mx auto col-md-6 my-3 ">
                    <img src={img} className="img-fluid" alt="pizza"/>
                </div>   
                {/*product text*/} 
                <div className="col-10 mx auto col-md-6 my-3 text-capitalize">
                    <h1>{title}</h1>
                    <h4><strong>price: <span>$</span>{price}</strong></h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        About this pizza:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                      <Link to='/'>
                          <ButtonContainer>
                            back to menu
                          </ButtonContainer>
                        </Link> 
                        <ButtonContainer onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                        }}>
                        add to cart
                        </ButtonContainer> 

                    </div>
                </div>
                </div>
                </div>
            )
                }}
            </ProductConsumer>
        )
    }
}
