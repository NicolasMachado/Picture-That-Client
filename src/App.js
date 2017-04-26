import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<header>
              <div className="burger-container">
                  <i className="fa fa-bars fa-lg"></i>
              </div>
              <h1>Picture That!</h1>
      	</header>
    	<main>
            <div className="container col1">
    			<div className="rooms-cont inside-cont">
                	Public rooms. Displays currently available public rooms.
    			</div>
            </div>
            <div className="container col1">
    			<div className="create-game-cont inside-cont">
                	Create room.<br /><br />
    				<a href="room.html">Create room</a>
    				Options to create a new room.
    			</div>
            </div>
            <div className="container col1">
    			<div className="to-landing-cont inside-cont">
                	Go to landing page.<br /><br />
    				<a href="landing.html">Landing page</a>
    			</div>
            </div>
    	</main>
      </div>
    );
  }
}

export default App;
