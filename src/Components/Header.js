import React, { Component } from 'react';

class Header extends Component {

   componentDidMount() {
      var words = document.getElementsByClassName('word');
      var wordArray = [];
      var currentWord = 0;

      words[currentWord].style.opacity = 1;
      for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
      }

      function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord === words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var j = 0; j < cw.length; j++) {
        animateLetterOut(cw, j);
      }

      for (var k = 0; k < nw.length; k++) {
        nw[k].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, k);
      }

      currentWord = (currentWord === wordArray.length-1) ? 0 : currentWord+1;
      }

      function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
      }

      function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
        // console.log(nw[i]);
      }, 340+(i*80));
      }

      function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        if (letter[i] === " ") {
          letter.push("&nbsp;");
        } else{
          letter.innerHTML = content.charAt(i);
        }
        word.appendChild(letter);
        letters.push(letter); 
      }
      wordArray.push(letters);
      }

      changeWord();
      setInterval(changeWord, 4000);
   }
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      // var occupation= this.props.data.occupation;
      // var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>

            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hi, I'm <br/><br/>
             {name} <br/><br/>
                <div className= {{align: "left"}}>
                <span class="word wisteria">Front-end  Developer</span>
                <span class="word belize">Back-end  Developer</span>
                <span class="word pomegranate">Software  Tester</span>
                </div>
                {/* <span class="word green">beautiful.</span>
                <span class="word midnight">cheap.</span> */}
           </h1>
            {/* <h3><span>{occupation}</span>.</h3> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
