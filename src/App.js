
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="myPhone">
        <img src={window.location.origin+"/images/LEAD.svg"} alt="lead_logo" className="leadLogo"/>
        <div className="welcome">Welcome to TASKMO</div>
        <div className="thanks" >Thank you for showing the interest</div>
        <div className="myForm">
          <div className="formText">Please fill the below details</div>
          <input type="text" className="myInput" placeholder="Enter your name"/>
          <input type="text" className="myInput" placeholder="Enter contact number"/>
          <input type="text" className="myInput" placeholder="Enter whatsapp number"/>
          <select type="text" className="myInput selectInput" >
          <option className="selectPlaceholder" value="" disabled selected hidden>Select your gender</option>
          </select>
          <select type="text" className="myInput selectInput" >
          <option className="selectPlaceholder" value="" disabled selected hidden>Choose your State</option>
          </select>
          <select type="text" className="myInput selectInput">
          <option className="selectPlaceholder" value="" disabled selected hidden>Choose your City</option>
          </select>
          <input type="text" className="myInput" placeholder="Enter area pincode"/>
          <select type="text" className="myInput selectInput">
          <option className="selectPlaceholder" value="" disabled selected hidden>Select job role</option>
          </select>
          <select type="text" className="myInput selectInput" >
          <option className="selectPlaceholder" value="" disabled selected hidden>Select languages you know</option>
          </select>
          <select type="text" className="myInput selectInput" >
          <option className="selectPlaceholder" value="" disabled selected hidden>Rate your English communication</option>
          </select>
          <div className="submitBtn glow">SUBMIT</div>
        </div>
      </div>
    </div>
  );
}

export default App;
