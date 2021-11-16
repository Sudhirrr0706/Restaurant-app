import React, { Component } from 'react'
import "./CSS/bookTable.css"
import {Animated} from "react-animated-css";
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';
import LandingPage from './LandingPage';
class BookTable extends Component {
    state={
        nameInput:"",
        mailInput:"",
        contactInput:"",
        cityInput:"",
        stateInput:"",
        zipCode:"",
        dateInput:"",
        personInput:"",
        nameAnime:false,
        nameError:"",
        mailAnime:false,
        mailError:"",
        contactAnime:false,
        contactError:"",
        dateAnime:false,
        dateError:"",
        peopleAnime:false,
        peopleError:"",
        showModal:false,
        confirmation:false,
        
        

    }

    onChangeNameHandler=(event=>{
        this.setState({nameInput:event.target.value})
    })

    onChangeMailHandler=(event=>{
        this.setState({mailInput:event.target.value})
    })

    onChangeContactHandler=(event=>{
        this.setState({contactInput:event.target.value})
    })

    onChangeCityHandler=(event=>{
        this.setState({cityInput:event.target.value})
    })

    onChangeStateHandler=(event=>{
        this.setState({stateInput:event.target.value})
    })

   onChangeZipCodeHandler=(event=>{
       this.setState({zipCode:event.target.value})
   })

    onChangeDateHandler=(event=>{
        this.setState({dateInput:event.target.value})
    })

    onChangePersonHandler=(event=>{
        this.setState({personInput:event.target.value})
    })

    OnClickSubmit=(event)=>{
        if(this.state.nameInput===""){
            this.setState({
                nameAnime:true,
                nameError:"Enter your name",
                mailAnime:false,
                mailError:"",
                contactAnime:false,
                contactError:"",
                dateAnime:false,
                dateError:""
            })
        }
        else if(this.state.mailInput===""){
            this.setState({
                nameAnime:false,
                nameError:"",
                mailAnime:true,
                mailError:"Mail id is Mandatory",
                contactAnime:false,
                contactError:"",
                dateAnime:false,
                dateError:"",
                peopleAnime:false,
                peopleError:""
            })
        }

        else if(this.state.contactInput===""){
            this.setState({
                nameAnime:false,
                nameError:"",
                mailAnime:false,
                mailError:"",
                contactAnime:true,
                contactError:"Enter your contact number",
                dateAnime:false,
                dateError:"",
                peopleAnime:false,
                peopleError:""
            })
        }
        else if(this.state.dateInput===""){
            this.setState({
                nameAnime:false,
                nameError:"",
                mailAnime:false,
                mailError:"",
                contactAnime:false,
                contactError:"",
                dateAnime:true,
                dateError:"Choose your preferred timmings",
                peopleAnime:false,
                peopleError:""

            })
        }
        else if(this.state.personInput===""){
            this.setState({
                nameAnime:false,
                nameError:"",
                mailAnime:false,
                mailError:"",
                contactAnime:false,
                contactError:"",
                dateAnime:false,
                dateError:"",
                peopleAnime:true,
                peopleError:"Enter the number of person"

            })
        }

        else{
            this.setState({
                nameAnime:false,
                nameError:"",
                mailAnime:false,
                mailError:"",
                contactAnime:false,
                contactError:"",
                dateAnime:false,
                dateError:"",
                peopleAnime:false,
                peopleError:"",
                showModal:true,
                

            })
        }

        event.preventDefault()
        emailjs.sendForm('service_2nj0um4','template_n08b30c', event.target, 'user_Y8RNF66Inl74cooqzopr5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    onModalHide=()=>{


        this.setState({showModal:false,confirmation:false})
        
    }

    onClickConfirmation=(e)=>{

        this.setState({confirmation:true})
        
        

    }

  

    // Send Email to confirm
  
   



    render() {
      let modalRender
        if(!this.state.confirmation){
            modalRender = 
            <div className="modalBody">
                <p className="text-secondary">Hello, <strong>{this.state.nameInput}</strong> verify your booking.</p>
                            <p className="d-flex ">Mail-id : <p className="text-primary"> {this.state.mailInput}</p></p>
                            <p className="d-flex">Contact : <p className="text-primary"> {this.state.contactInput}</p></p>
                            <div className="d-flex flex-wrap justify-content-between">
                                <p className="d-flex justify-content-between ">Your Visit on : <p className="text-primary" format="ddd/mmm/yyyy"> {this.state.dateInput}</p></p>
                                <p className="d-flex justify-content-between ">Booked Seats : <p className="text-primary"> {this.state.personInput}</p></p>
                            </div>
                <p className="confirmation text-secondary">Click confirm to book your seats!</p>
            </div>
        }

        else if (this.state.confirmation){

            modalRender = <LandingPage name={this.state.nameInput} />
            
        }

        
        return (
           <React.Fragment>
               <div className="d-flex flex-wrap justify-content-center align-items-center">
                   <div className="col-lg-5 col-12">
                        <img className="TableBookImage" src="../book-Table.jpg" alt=""/>
                   </div>

                   

                   <div className="col-lg-7 col-12 forms">
                    <form className="row g-3 px-lg-4 px-3 py-4 mt-auto" onSubmit={this.OnClickSubmit}>
                        <div className="col-12">
                            <label for="Name" className="form-label labelName">Name</label>
                            <input type="text" className="form-control text-white" id="Name" value={this.state.nameInput} onChange={this.onChangeNameHandler} name="user_name" />
                            <Animated animationIn="shake" isVisible={this.state.nameAnime}>
                                <span className="Error text-danger">{this.state.nameError}</span>
                            </Animated>
                        </div>
                      
                        <div className="col-md-6 col-12">
                            <label for="Email" className="form-label labelName">E mail</label>
                            <input type="text" className="form-control text-white" id="Email" value={this.state.mailInput} onChange={this.onChangeMailHandler} name="send_to"/>
                            <Animated animationIn="shake" isVisible={this.state.mailAnime}>
                                <span className="Error text-danger">{this.state.mailError}</span>
                            </Animated>
                        </div>
                        <div className="col-md-6 col-12">
                            <label for="Contact" className="form-label labelName">Contact</label>
                            <input type="text" className="form-control text-white" id="Contact" value={this.state.contactInput} onChange={this.onChangeContactHandler} name="user_contact"/>
                            <Animated animationIn="shake" isVisible={this.state.contactAnime}>
                                <span className="Error text-danger">{this.state.contactError}</span>
                            </Animated>
                        </div>
                        <div className="col-md-6 col-4">
                            <label for="inputCity" className="form-label labelName">City</label>
                            <input type="text" className="form-control text-white" id="inputCity" value={this.state.cityInput} onChange={this.onChangeCityHandler}/>
                        </div>
                        <div className="col-md-4 col-4">
                            <label for="inputState" className="form-label labelName">State</label>
                            <select id="inputState" className="form-select text-white" value={this.state.stateInput} onChange={this.onChangeStateHandler}>
                                <option selected  className="text-dark">Choose...</option>
                                <option className="text-dark">Andhra Pradhesh</option>
                                <option  className="text-dark">TamilNadu</option>
                                <option  className="text-dark">Maharashtra</option>
                                <option  className="text-dark">Goa</option>
                            </select>
                        </div>
                        <div className="col-md-2 col-4">
                            <label for="inputZip" className="form-label labelName">Zip</label>
                            <input type="text" className="form-control text-white" id="inputZip" value={this.state.zipCode} onChange={this.onChangeZipCodeHandler} />
                        </div>
                      
                   
                        <div className="col-md-6 col-12">
                            <label for="inputDate" className="form-label labelName">Date</label>
                            <input type="date" className="form-control text-white" id="inputDate" value={this.state.dateInput} onChange={this.onChangeDateHandler} name="user_slot" />
                            <Animated animationIn="shake" isVisible={this.state.dateAnime}>
                                <span className="Error text-danger">{this.state.dateError}</span>
                            </Animated>
                        </div>
                        <div className="col-md-6 col-12">
                            <label for="inputPerson" className="form-label labelName">Seats</label>
                            <input type="number" className="form-control text-white" id="inputPerson" value={this.state.personInput} onChange={this.onChangePersonHandler} name="seat_count" />
                            <Animated animationIn="shake" isVisible={this.state.peopleAnime}>
                                <span className="Error text-danger">{this.state.peopleError}</span>
                            </Animated>
                        </div>

                        <div className="BookButton">
                            <button type="submit" className="btn customBookButton px-4">Book Now!</button>
                        </div>
                    </form>
                        
                   </div>
               </div>

               {/* Modal */}
               <div className="modal">
                    <Modal show={this.state.showModal} onHide={this.onModalHide}>

                        <Modal.Header closeButton>
                            <Modal.Title className="moddalHeader">Booking Confirmation</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        
                            {modalRender}
                           
                        </Modal.Body>

                            <Modal.Footer>
                                <div className="d-flex justify-content-center">
                                    <button className="m-2 btn btn-secondary closeButton"  onClick={this.onModalHide}>
                                        Close
                                    </button>
                                    <button className="m-2 btn btn-secondary confirmButton"  onClick={this.onClickConfirmation}>
                                        Confirm
                                    </button>
                                </div>
                            </Modal.Footer>

                    </Modal>
                </div>
           </React.Fragment>
        )
    }
}

export default BookTable
