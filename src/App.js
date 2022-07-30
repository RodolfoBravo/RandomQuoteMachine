import './App.css';
import React from 'react';
import axios from "axios";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'text random',
      author: 'author random',
      color: '#000000',
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText() {
    var simbolos, colorRandom;
    simbolos = "0123456789ABCDEF";
    colorRandom = "#";

    for (var i = 0; i < 6; i++) {
      colorRandom = colorRandom + simbolos[Math.floor(Math.random() * 16)];
    }

    // declaramos el array con frases ,el número de posiciones es indiferente
    var Frases = new Array()
    var Authors = ["– Jeff Bezos de Amazon.","– Thomas Edison.","– Steve Jobs","– Bill Gates","Rodolfo Bravo"]
    
    Frases[0] = " If at the beginning you can't feed your team with 2 pizzas, it's too big"
    Frases[1] = " The value of an idea lies in the use of it";
    Frases[2] = " Work is going to take up a large part of your life. The only way to be truly satisfied";
    Frases[3] = " Your most dissatisfied customers should be your greatest source of learning";
    Frases[4] = " A vision of an idea without the ability to execute is just a hallucination";

    // Calculamos la longitud del array (el resultado será el número de frases)
    var Q = Frases.length;

    // Obtener un número aleatorio entre 1 y la cantidad de frases incluidas
    //Utilizando la clase Math y el método random().
    var numRandom = Math.round(Math.random() * (Q - 1));


    this.setState({
      text: Frases[numRandom],
      author: Authors[numRandom],
      color: colorRandom
    });


  }



  render() {
    return (
      <div className='container-fluid' style={{ background: this.state.color }}>
        <div className='row' id='quote-box'>
          <div className='row' id='text'>
            <span className='col-12 text-center' style={{ color: this.state.color }}><i class="fa-solid fa-quote-left"></i>{this.state.text} <i class="fa-solid fa-quote-right"></i></span>
          </div>
          <div className='row' id='author'>
            <span className='col-xs-4 col-sm-4 text-end' style={{ color: this.state.color }}>{this.state.author}</span>
          </div>
          <div className='row' id='icons'>
            <div className='col-xs-3 col-sm-6 d-flex justify-content-start mb-3'>
              <a href="https://twitter.com/intent/tweet" target="_blank" className='btn mx-1' id="tweet-quote" style={{ background: this.state.color }}><h4><i className="fa-brands fa-twitter"></i></h4></a>
              <a className='btn mx-1' style={{ background: this.state.color }}><h4><i className="fa-brands fa-tumblr"></i></h4></a>
            </div>
            <div className='col-xs-3 col-sm-6 d-flex justify-content-end align-items-center mb-3'>
              <button className='btn btn-primary' id="new-quote" onClick={this.changeText} style={{ background: this.state.color }}>New quote</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
