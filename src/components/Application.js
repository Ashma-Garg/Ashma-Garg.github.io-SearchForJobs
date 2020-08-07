import React, {Component} from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
// import { Table,Col, Row } from 'reactstrap';
class Application extends Component{
    constructor(props){
        super(props);
        this.state={
            jobId:this.props.match.params.id,
            disp:[],
            display:[],
            isAccepted:'',
            Company:''
        };
        this.permission=this.permission.bind(this);
    }
    permission(candId){
        alert('Accepted');
        axios.post(`http://localhost:2040/jobs/setrue/${this.state.jobId}`,{candId})
        .then(res=>{console.log(res.data)});
        document.getElementById(candId).disabled='true';
        console.log("Clicked");

    }
    componentDidMount(){
        axios.get(`http://localhost:2040/jobs/application/${this.state.jobId}`)
        .then(res=>{
            this.setState({
            Company:res.data.Company,
            disp:
                res.data.CandidateId.map((cand)=>{
                    return cand.candid;
                }),
            isAccepted: res.data.CandidateId.map((cand)=>{
                return cand.isAccepted;
            })
            })


        })
        var ex;
        var i=-1;
        setTimeout(()=>{
        axios.all(this.state.disp.map(l => axios.get(`http://localhost:2040/candidate/data/${l}`)))
        .then(axios.spread(function (...res) {
                ex=res.map((res)=>{
                    return(
                        res.data
                    );
                })
        }));
        },100);
        setTimeout(()=>{
            this.setState({
                display:ex.map((ex)=>{
                    i++;
                    return(
                        <tr className="col-12">
                        <td>
                            <p>{ex.Name}</p>
                        </td>
                        <td>
                        <button className={this.state.isAccepted[i]==='true'?"btn btn-success disabled":"btn btn-success"} id={ex._id} disabled={this.state.isAccepted[i]==='true'?true:false} onClick={()=>this.permission(ex._id)}>{this.state.isAccepted[i]==='true'?"Accepted":"Accept"}</button>
                        </td>
                        </tr>
                )
                })
            })
            // console.log(ex)
        },1000)
        

    }
    render(){
        return(
            <div className="container">
                
                <h3 style={{textDecoration:"underline",marginTop:"3%"}}>{this.state.Company}</h3>
                <Table dark borderd hover responsive>
                    <tbody>
                        {this.state.display}
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default Application;