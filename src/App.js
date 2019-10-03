import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.dropdown = React.createRef()
  }

  toggleContainer = () => {
    console.log(this.dropdown)
    // let { current } = this.dropdown
    // if (current.classList.contains('show-animation')) {
    //   current.classList.add('hide-animation')
    //   current.classList.remove('show-animation')
    // } else {
    //   current.classList.add('show-animation')
    //   current.classList.remove('hide-animation')
    // }
  }
  render() {
    return (
      <div className="App">
        <div className="image">
          <header>
            <div className='header-bar'>
              <h2 className='bootstrap'>Start Bootstrap</h2>
              <button className='menuButton' onClick={this.toggleContainer}> MENU
                <i className='fas fa-bars'></i>
              </button>
              <div className='container'>
                <div className='buttons'>Services</div>
                <div className='buttons'>Portfolio</div>
                <div className='buttons'>About</div>
                <div className='buttons'>Team</div>
                <div className='buttons'>Contact</div>
              </div>
            </div>
          </header>
          <div className='container-dropdown' ref={this.dropdown}>
            <div className='dropdown-buttons'>Services</div>
            <div className='dropdown-buttons'>Portfolio</div>
            <div className='dropdown-buttons'>About</div>
            <div className='dropdown-buttons'>Team</div>
            <div className='dropdown-buttons'>Contact</div>
          </div>
          <h1>WelcomeTo Our Studio!</h1>
          <h1 className='meet-you'>IT'S NICE TO MEET YOU</h1>
          <div className='more-button'>TELL US MORE</div>
        </div>
      </div>
    );
  }
}

export default App;
