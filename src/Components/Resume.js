import React, { Component } from 'react';
import HTML from "../img/HTMLImg.png";
import CSS from "../img/CSSImg.png";
import JS from "../img/JSImg.png";
import jQuery from "../img/JqueryImg.png";
import react from "../img/react.png";
import node from "../img/nodeJS.png";
import express from "../img/expressImg.png";
import mongoDB from "../img/mongoDB.png";
import mySQL from "../img/mySQLImg.png";
import java from "../img/javaImg.png";
import manualTesting from "../img/manual-testing.png";
import selenium from "../img/seleniumImg.png";
import jmeter from "../img/jmeterPic.png";
import { Tabs, Tab } from "react-bootstrap";

class Resume extends Component {

  constructor() {
    super();
    this.state = {
      key: " ",
     
    };
  }

  render() {

    if(this.props.data){
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} </p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            {/* <p>{skillmessage}
            </p> */}

				{/* <div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div> */}

        <div className="tabs">
        {/* <div className= "row"> */}
          {/* <div className="twelve columns main-col"> */}
          <Tabs
            defaultActiveKey="Front-end"
            transition={false}
            style= {{marginBottom: "3%",  marginRight : "2%"}}
            onSelect={(k) =>  this.setState({ key: k }) }
          >
            <Tab
              eventKey="Front-end"
              title="Front-end"
              style={{ fontFamily: "Kanit, sans-serif", fontSize : "20px" }}
              
            >
              <div class = "icons" align="center">
               <img src = {HTML} width="90" height="90" alt="HTML" style= {{marginRight: "5%"}}/>
               <img src = {CSS} width="90" height="90" alt="CSS" style= {{marginRight: "5%"}}/>
               <img src = {JS} width="90" height="60" alt="JS" style= {{marginTop: "3%", marginRight: "4%"}}/>
               <img src = {jQuery} width="90" height="90" alt="jQuery" style= {{marginRight: "5%"}}/>
               <img src = {react} width="90" height="70" alt="react" style= {{marginRight: "5%"}}/>


              </div>
            </Tab>
            <Tab
              eventKey="Back-end"
              title="Back-end"
              style={{ fontFamily: "Kanit, sans-serif",  fontSize : "20px" }}
            >
              <div class = "icons" align= "center">
               <img src = {node} width="110" height="90" alt="node" style= {{marginRight: "4%"}}/>
               <img src = {express} width="120" height="120" alt="express" style= {{marginRight: "4%"}}/>
               <img src = {mongoDB} width="110" height="60" alt="mongoDB"  style= {{marginRight: "4%"}}/>
               <img src = {mySQL} width="110" height="50" alt="mySQL" style= {{marginRight: "4%"}}/>
               <img src = {java} width="60" height="90" alt="java" style= {{marginRight: "4%"}}/>
               {/* <img src = {MERN} width="210" height="120"  style= {{marginRight: "4%"}}/> */}

              </div>
            </Tab>
            <Tab
              eventKey="Tester"
              title="Tester"
              style={{ fontFamily: "Kanit, sans-serif", fontSize : "20px" }}
            >
               <div class = "icons" align= "center">
               <img src = {manualTesting} width="180" height="150" alt="manual testing" style= {{marginRight: "4%"}}/>
               <img src = {selenium} width="90" height="70" alt="selenium testing" style= {{marginRight: "4%"}}/>
               <img src = {jmeter} width="100" height="70" alt="jmeter" style= {{marginRight: "4%"}}/>
              </div>
            </Tab>
          </Tabs>
          {/* </div> */}
        {/* </div> */}
        </div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
