
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="myPhone">
        <img src={window.location.origin+"/images/LEAD.svg"} alt="lead_logo" className="leadLogo"/>
        <div className="welcome">Welcome to TASKMO</div>
        <div >Thank you for showing the interest</div>
        <div className="myForm">
          <input type="text" className="myInput" placeholder="Full Name"/>
          <input type="text" className="myInput" placeholder="Contact Number"/>
          <input type="text" className="myInput" placeholder="Whatsapp Number"/>
          <input type="text" className="myInput" placeholder="Gender"/>
          <select type="text" className="myInput selectInput" >
          <option className="selectPlaceholder" value="" disabled selected hidden>State</option>
          </select>
          <select type="text" className="myInput selectInput">
          <option className="selectPlaceholder" value="" disabled selected hidden>City</option>
          </select>
          <input type="text" className="myInput" placeholder="Pincode"/>
          <select type="text" className="myInput selectInput">
          <option className="selectPlaceholder" value="" disabled selected hidden>Job Role</option>
          </select>
          <input type="text" className="myInput" placeholder="Languages"/>
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
