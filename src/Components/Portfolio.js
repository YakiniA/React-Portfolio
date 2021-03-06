import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
          
              <img alt={projects.title} src={projectImage} style={{width: "300px", height: "200px"}} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
 
                </div>
                
                <a href={projects.deployed} title={projects.title} target="_blank" rel="noopener noreferrer">
                    <div className="link-icon" style= {{paddingLeft: "2em"}}><i className="fa fa-external-link links"></i></div>
                </a>
                <a href={projects.github} title={projects.title}  target="_blank" rel="noopener noreferrer">
                    <div className="link-icon"><i className="fa fa-github links"></i></div>
                </a>

                </div>
  
            {/* <a href={projects.github} title={projects.title}  target="_blank">

              <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                  </div>
                </div>

              <div className="link-icon"><i className="fa fa-github"></i></div>
            </a>  */}

               
            {/* </a> */}
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
