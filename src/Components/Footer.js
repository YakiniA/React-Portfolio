import React, { Component } from 'react';
import resume from  '../Resume/Yakini_Resume.pdf';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
    <footer>
    <section id="contact">
     <div className="row">
        {/* <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul>
            <li>Modified with love by the Clever Programmer team ♥️</li>
           </ul>

           <ul className="copyright">
              <li>&copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div> */}

      <div className="col-sm-6 text-center">

      <div className="heading">Contact Details
      <br /> <br />
      <div className="contents"> I am ready for hire and open to new opportunities<br />
        Phone : 508-494-3722<br/>
        Email : yakinilatha09@gmail.com<br /> <br /></div>
      <a href={resume} className="btn btn-primary btn-light contents" download="Resume">Check out
        my Resume</a>
        </div>

      </div>

      <div className="col-sm-6 text-center">

      <h3 className = "heading">Connect</h3>
      <br />
      {/* <a href="tel:5084943722">
        <FaPhoneAlt style={{height: "3em", width:"3em", color: "white", marginRight:"2em"}}/> 
      </a>
      <a href="mailto:yakinilatha09@gmail.com">
        <GrMail style={{height: "3em", width:"3em", color: "white", marginRight:"2em"}}/> 
      </a>
      <a href="https://github.com/YakiniA" target="_blank" rel="noopener noreferrer">
        <AiFillGithub style={{height: "3em", width:"3em", color: "white", marginRight:"2em"}}/> 
      </a>
      <a href="https://www.linkedin.com/in/yakini-arumuga-kani-84265464/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin style={{height: "3em", width:"3em", color: "white"}}/> 

        </a> */}

      <ul className="social-links">
          {networks}
        </ul>

      </div>
      </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     {/* </div> */}

     </section>
  </footer>
    );
  }
}

export default Footer;
