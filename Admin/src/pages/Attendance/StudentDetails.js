import React, { useEffect } from "react";
import './css.css'
import {
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
  } from "reactstrap"
  
  //Import Breadcrumb
//   import Breadcrumbs from "../../components/Common/Breadcrumb"
const StudentDetail=()=>{
    return(
    <React.Fragment>
    <div style={{width:"100%",padding:5,height:100,backgroundColor:"darkblue"}}>
        <div style={{width:200,float:"left", height:"100vh"}}>pic</div>
        <div className="table-responsive" style={{width:"85%",float:"left",height:100,float:"left",  display:'block'}}>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b style={{color:"white"}}>Name:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b style={{color:"white"}}>Rollnumber:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b style={{color:"white"}}>Course:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b style={{color:"white"}}>Attendence:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b style={{color:"white"}}>Session:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b style={{color:"white"}}>Branch:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
            <div className="sdetails1">
                <div className="innerdiv">
                <p><b style={{color:"white"}}>College:</b></p>
                </div>
                <div className="siderdiv">

                </div>
                <div className="innerdiv">
                <p><b style={{color:"white"}}>TodayClass:</b></p>
                </div>
                <div className="siderdiv">

                </div>
            </div>
        </div>
        <table style={{float:"left", width:"85%"}}>
            <tr>
                <th>S. No.</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
            
        </table>
    </div>  
    </React.Fragment>
    )
}
export default  StudentDetail