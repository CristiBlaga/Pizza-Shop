import React, { Component } from 'react'
export default class PlaceOrder extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           Total: this.props.total,
           fullName: "",
           address: "",
           phoneNr:""
       }
   }
   
   handleSubmit = (event) => {
       event.preventDefault()
      
       const data=this.state
       console.log("final data is:" , data)
       
   }

   handleInputChange = (event) => {
       event.preventDefault()
       this.setState({
           [event.target.name]:event.target.value,
           
       })
       
   }
    render() {
      
       
        return (
            <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                <h1>your order</h1>
               
                
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='Your Full Name' name='fullName' onChange={this.handleInputChange}/></p>
                    <p><input type='text' placeholder='Your address' name='address' onChange={this.handleInputChange}/></p>
                    <p><input type='number' placeholder='Phone number' name='phoneNr' onChange={this.handleInputChange}/></p>
                    <p><button className="btn btn-outline-danger text-uppercase mb-3 px-5" >Send order</button></p>
                </form>
            </div>
        )
    }
}
