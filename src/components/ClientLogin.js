import React, {Component} from 'react';
import {Label, Col, Row,Button} from 'reactstrap';
// import 'react-redux';
// import 'redux';
import {Link} from 'react-router-dom';
import {LocalForm,Control} from 'react-redux-form';
class ClientLogin extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        console.log("Current values are: "+ JSON.stringify(values));
        alert("Current values are: "+ JSON.stringify(values));
    }
    render(){
        return(
            <div className="container" style={{height:"400px",marginTop:"200px"}}>
                <h3 style={{padding:"20px"}}>Login As Client...</h3>
                <LocalForm className="col-md-8 offset-md-2" onSubmit={this.handleSubmit}>
                    <Row className="form-group">
                        <Label md={{size:2}} htmlFor="email">Email</Label>
                        <Col>
                        <Control.text model=".email" id="email" name="email" className="form-control" placeholder="Email"></Control.text>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={{size:2}}htmlFor="password" >Password</Label>
                        <Col>
                        <Control.text model=".password" name="password" id="password" className="form-control" placeholder="Password"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:2,offset:4}}>
                        <Button type="submit">Submit</Button>
                        </Col>
                        <Col>
                        <Link to="/clientregister" >Not Registered?</Link>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <Row className="form-group">
                    <Col md={{offset:2,size:6}}>
                        <Link to="/">
                            <Button className="form-control btn btn-lg" color="primary">If Candidate!!</Button>
                        </Link>
                    </Col>
                    </Row>
                    
                </LocalForm>
            </div>
        );
    }
}

export default ClientLogin;