import React, { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap"
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"
const GetDetails  = props => {
  const [singlebtn, setSinglebtn] = useState(false)
  const [singlebtn1, setSinglebtn1] = useState(false)
    return (
       
        <div styel={{width:"100%"}}>
            <div style={{width:"100%",height:100,backgroundColor:"darkblue"}}>
                <div style={{width:700,height:100,float:"left"}}>
                <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={"search" + "..."}
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-success" type="submit">
                        <i className="mdi mdi-magnify" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
                 </div>
                <div style={{width:100,height:50,float:"left"}}> </div>
                <div style={{width:100,height:50,float:"left",padding:15}}>
                <Button
                    color="success"
                    className="btn btn-secondary waves-effect"
                    style={{width:150}}
                    onClick={()=>{window.location.href="/Addstudent"}}
                  >
                    Add Student
                    </Button>{" "} </div>
                <div style={{width:100,height:50,float:"left"}}> </div>
                <div style={{width:100,height:50,float:"left",padding:15}}>
                <Dropdown
                        isOpen={singlebtn}
                        toggle={() => setSinglebtn(!singlebtn)}
                      >
                        <DropdownToggle className="btn btn-success" caret>
                          Courses{" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>FullStack Development</DropdownItem>
                          <DropdownItem>AWS Devops</DropdownItem>
                          <DropdownItem>Azure Devops</DropdownItem>
                          <DropdownItem>Pega</DropdownItem>
                          <DropdownItem>Salesforce</DropdownItem>
                          <DropdownItem>AIML</DropdownItem>
                          <DropdownItem>Gaming</DropdownItem>
                          <DropdownItem>UI/UX</DropdownItem>
                          <DropdownItem>VLSI</DropdownItem>
                          <DropdownItem>Flutter</DropdownItem>
                        </DropdownMenu>
                      </Dropdown> </div>
                <div style={{width:100,height:50,float:"left"}}> </div>
                <div style={{width:100,height:50,float:"left",padding:15}}>
                <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                      >
                        <DropdownToggle className="btn btn-success" caret>
                          Count
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>No.of Presentees</DropdownItem>
                          <DropdownItem>No.of Absentees</DropdownItem>
                          <DropdownItem>Total Students</DropdownItem>
                          
                        </DropdownMenu>
                      </Dropdown>  </div>
            </div>
            

                <div className="table-responsive">
                  <Table className="table table-striped mb-0"style={{margin:"auto",width:"65%",textAlign:"center"}} >
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Roll Number</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Today's Status</th>
                      </tr>
                    </thead>
                    </Table>
          </div>
         
        
           
        </div>
//         <div className="input-group-append">
//         <button className="btn btn-primary" type="submit">
//           <i className="mdi mdi-magnify" />
//         </button>
//           </div>

    )
}
export default GetDetails