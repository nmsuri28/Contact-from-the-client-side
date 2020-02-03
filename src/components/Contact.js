import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import EmailJSApi from '../services/EmailJSApi'

const template_id = "<your template_id>";
const userID = EmailJSApi.key;


export default class Contact extends Component{
constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
        name: '',
        email:'',
        message:'',
        submit: false
    }   
   
    this.handleEmailChange=this.handleEmailChange.bind(this);
   
}
    handleEmailChange=(event)=>{
        event.preventDefault();
        this.setState({email: event.target.value })
        // console.log('handleEmailChange' + this.state.email);
     }
     nameChange=(event)=>{
        event.preventDefault();
        this.setState({name: event.target.value })
        // console.log('nameChange' + this.state.name);
     };
     messageChange=(event)=>{
        event.preventDefault();
        this.setState({message: event.target.value })
        // console.log('messageChange' +this.state.message);
     }
    
     handleSubmit=(event) =>{
        event.preventDefault();
       
        // Testing
        // console.log('submitted is being seen')
        // console.log(this.state.name)
        // console.log(  this.state.email )
        // console.log( this.state.message)

        const name = this.state.name
        const email = this.state.email
        const data = this.state.message

        
     //this is how I have my template set up with email.js
     const template_params = {
        "email": email,
        "from_name": name,
        "to_name": "Alchemical Mind", 
        "message_html": data
    };
     
    emailjs.send('default_service',template_id, template_params
    , userID
    )
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
        this.setState({
            submit:true
        })
       
        this.reset();
    }
    
    reset(){
        this.setState({
            name: '',
            email:'',
            message:'', 
        })
    }

    render(){
        const submission = this.state.submit;
        let response;
        if (submission){
            response =
            <div className='response'>
                <h1>Thank you for Contacting Alchemical Mind!</h1>
                <p>
                    Please allow us time to review your request and we will be in contact with you within the next 48hrs!
                </p>
            </div>
        } else{
            response =
            <div>
            <h3 className='mt-2 mb-4 formTitle'>Contact Us</h3>
            <form id='contact-form'>
        <div className="form-group" >
            <label htmlFor="Name">Name <i>(required)</i></label>
            <input onChange={this.nameChange} ref='input' type="text" value={this.state.name} className="form-control mt-2 mb-5" id="Name" placeholder=""></input>
            

            <label htmlFor="exampleInputEmail1">Email address <i>(required)</i></label>
            <input type="text" name='email' ref='input' value={this.state.email} onChange={this.handleEmailChange} className="form-control mt-2 mb-5" ></input>
            
            
            <label htmlFor="exampleFormControlTextarea1">Message/Comments <i>(required)</i></label>
            <textarea value={this.state.message} ref='input' className="form-control mt-2 mb-5" id="exampleFormControlTextarea1" rows="7" onChange={this.messageChange}></textarea>
            <button className="btn btn-primary btn-lg mb-3"
            onClick={this.handleSubmit} 
            >Submit</button>
            
        </div>
        </form >
        </div>
        }
        
        return(
            <div className="container mb-5">
            <div className='row-fluid justify-content-center'>
            <div className='col'>   
                   {response}
                
            </div>
            </div>
            </div>
        )

  }
}