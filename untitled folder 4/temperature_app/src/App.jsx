import { useState } from "react";
import "./App.css";

function App() {

      const [temperature, setTemperature] = useState(20);
      function handleIncrease() {
        setTemperature(prevTemperature => prevTemperature + 1);
      }
      function handleDecrease() {
        setTemperature(prevTemperature => prevTemperature - 1);
      }
    
      let backgroundColor;
      if (temperature < 0) {
            backgroundColor = "blue";
          } else if (temperature < 15) {
            backgroundColor = "green";
          } else if (temperature < 30) {
            backgroundColor = "yellow";
          } else {
            backgroundColor = "red";
          }
  return (
        <div className="container">
          <div className="card">
            <div className="temperature" style={{ backgroundColor }}>
              {temperature}°C
            </div>
            <div className="control-container">
              <div className="controller plus" onClick={handleIncrease}>
                +
              </div>
              <div className="controller minus" onClick={handleDecrease}>
                -
              </div>
            </div>
          </div>
        </div>
      );
    }
export default App;
