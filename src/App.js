import './App.css';
import React from 'react';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'text random',
      author: 'author random',
      color: '#00FF00',
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText() {

    this.setState({
      text: 'new text random',
      author: 'new author random',
      color:'#0000FF'
    })
  }

  

  render() {
    return (
      <div className='container-fluid' style={{background: this.state.color}}>
        <div className='row' id='quote-box'>
          <div className='row' id='text'>
            <span className='col-12 text-center' style={{ color: this.state.color }}><i class="fa-solid fa-quote-left"></i>{this.state.text} <i class="fa-solid fa-quote-right"></i></span>
          </div>
          <div className='row' id='author'>
            <span className='col-xs-2 col-sm-3 text-end' style={{ color: this.state.color }}>-{this.state.author}</span>
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
