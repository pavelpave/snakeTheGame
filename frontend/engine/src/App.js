import React from "react";
import "./assets/css/style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: null
    };
  }
  controller = e => {
     console.log(e);
    // var k = e.keyCode;
    // if ([38, 39, 40, 37].indexOf(k) >= 0) e.preventDefault();
    // if (k === 39 && this.state.direction !== 3) this.setState({ direction: 1 }); //Вправо
    // if (k === 40 && this.state.direction !== 4) this.setState({ direction: 2 }); //Вниз
    // if (k === 37 && this.state.direction !== 1) this.setState({ direction: 3 }); //Влево
    // if (k === 38 && this.state.direction !== 2) this.setState({ direction: 4 }); //Вверх
   
  };
  render() {
    return (
      <div>
        <div className="wrap_project">
          <div className="navigations_wrap" />
          <div className="canvas_wrap">
            <canvas id="canvas" onKeyDown={this.controller} >
            
            </canvas>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
