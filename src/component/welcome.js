
import { useState } from 'react';
import validator from 'validator';
import stateCity from '../dataset/state_city';
import { SUBMIT_FORM_URL } from './../myApi';

export default function Welcome() {
  const [fullName,setFullName]=useState("");
  const [fullNameError,setFullNameError]=useState("");
  const [contactNo,setContactNo]=useState("");
  const [contactNoError,setContactNoError]=useState("");
  const [whatsappNo,setWhatsappNo]=useState("");
  const [whatsappNoError,setWhatsappNoError]=useState("");
  const [gender,setGender]=useState("");
  const [state,setState]=useState("");
  const states = stateCity.map((obj) => obj.state);
  const uniqueStates = [...new Set(states)];
  const sortedStates = uniqueStates.sort();
  const [city,setCity]=useState("");
  const [jobRole,setJobRole]=useState("");
  const [languages,setLanguages]=useState([]);
  const [engRating,setEngRating]=useState([]);
  const [loading,setLoading]=useState(false);
  const [disableSubmitBtn,setDisableSubmitBtn]=useState(false);
  const submitFunc=()=>{
    setLoading(true);
    fetch(SUBMIT_FORM_URL,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        fullName,
        contactNo,
        whatsappNo,
        gender,
        state,
        city,
        jobRole,
        languages,
        engRating
      })
    }).then(r=>r.json()).then((r)=>{
      if(r.message==="success"){
        setLoading(false);
      }else{
        console.log("error while submitting form: response: ",r);
        setLoading(false);
      }
    }).catch((e)=>{
      console.log("error while submitting form: ",e);
      setLoading(false);
    })
  }

  const handleFullName=(e)=>{
    const fullName=e.target.value.trim();
    if(validator.isAlpha(fullName)){
      setFullName(fullName);
      setFullNameError("");
    }else{
      setFullNameError("Full name should have only alphabets");
      setFullName("");
    }

  }
  const handleContactNo=()=>{

  }
  const handleWhatsappNo=()=>{

  }
  const handleGender=()=>{

  }
  const handleState=()=>{

  }
  const handleCity=()=>{

  }
  const handlePincode=()=>{

  }
  const handleJobRole=()=>{

  }
  const handleLanguage=()=>{

  }
  const handleEngRating=()=>{

  }
  return (
      <div className="myPhone">
        <img src={window.location.origin+"/images/LEAD.svg"} alt="lead_logo" className="leadLogo"/>
        <div className="welcome">Welcome to TASKMO</div>
        <div className="thanks" >Thank you for showing the interest</div>
        <div className="myForm">
          <div className="formText">Please fill the below details</div>
          <input type="text" className="myInput" placeholder="Enter your name" onChange={handleFullName}/>
          <input type="text" className="myInput" placeholder="Enter contact number" onChange={handleContactNo}/>
          <input type="text" className="myInput" placeholder="Enter whatsapp number" onChange={handleWhatsappNo}/>
          <select type="text" className="myInput selectInput" onChange={handleGender}>
          <option className="selectPlaceholder" value="" disabled selected hidden>Select your gender</option>
          </select>
          <select type="text" className="myInput selectInput" onChange={handleState} >
          <option className="selectPlaceholder" value="" disabled selected hidden>Choose your State</option>
          </select>
          <select type="text" className="myInput selectInput" onChange={handleCity}>
          <option className="selectPlaceholder" value="" disabled selected hidden>Choose your City</option>
          </select>
          <input type="text" className="myInput" placeholder="Enter area pincode" onChange={handlePincode}/>
          <select type="text" className="myInput selectInput" onChange={handleJobRole}>
          <option className="selectPlaceholder" value="" disabled selected hidden>Select job role</option>
          </select>
          <select type="text" className="myInput selectInput" onChange={handleLanguage} >
          <option className="selectPlaceholder" value="" disabled selected hidden>Select languages you know</option>
          </select>
          <select type="text" className="myInput selectInput" onChange={handleEngRating} >
          <option className="selectPlaceholder" value="" disabled selected hidden>Rate your English communication</option>
          </select>
          <div className="submitBtn glow" onClick={submitFunc} disabled={disableSubmitBtn}>SUBMIT</div>
        </div>
      </div>
  );
}
