import React from "react";
import'./Reason.css';
import image1 from"../../assets/image1.png";
import image2 from"../../assets/image2.png";
import image3 from"../../assets/image3.png";
import image4 from"../../assets/image4.png";
import tick from"../../assets/tick.png";
import adidas from"../../assets/adidas.png";
import nike from"../../assets/nike.png";
import nb from"../../assets/nb.png";
import Header from "../Heder/Header";
function Reason(){
    return(
    <div className="reason">
        <Header/>
        <img style={{float:'left',marginTop:'2%',borderRadius:'10px',marginLeft:'2%',marginBottom:'5%',height:'40rem',width:'17rem',boxShadow:' 0 4px 8px 0 rgba(0,0,0, 2),0 6px 20px 0 rgba(0,0,0, 19)'}}src={image1}/>
        <img style={{float:'left',marginLeft:'2%',marginTop:'2%',borderRadius:'10px',boxShadow:' 0 4px 8px 0 rgba(0,0,0, 2),0 6px 20px 0 rgba(0,0,0, 19)'}} src={image2}/>
        <img style={{float:'left',marginLeft:'-36%',marginTop:'26.5rem',borderRadius:'10px',boxShadow:' 0 4px 8px 0 rgba(0,0,0, 2),0 6px 20px 0 rgba(0,0,0, 19)'}} src={image3}/>
        <img style={{float:'left',marginLeft:'-14.5%',marginTop:'26.5rem',borderRadius:'10px',boxShadow:' 0 4px 8px 0 rgba(0,0,0, 2),0 6px 20px 0 rgba(0,0,0, 19)'}} src={image4}/>
        <div className="container">
        <p>Some Reasons</p>
        <span className="stroke">Why </span>
        <span> choose us?</span><br/>
        <div className="container-1">
        <img src={tick} style={{marginTop:'10%',width:'2.3rem',display:'flex'}}/>
        <span>over 140+ expert coachs</span>
        </div>
        <div className="container-1">
        <img src={tick} style={{marginTop:'10%',width:'2.3rem',display:'flex'}}/>
        <span>train smarter and faster than before</span>
        </div>
        
        <div className="container-1">
        <img src={tick} style={{marginTop:'10%',width:'2.3rem',display:'flex'}}/>
        <span>1 free program for new member</span>
        </div>
        
        <div className="container-1">
        <img src={tick} style={{marginTop:'10%',width:'2.3rem',display:'flex'}}/>
        <span>reliable partners</span>
        </div>
        </div>
        <div className="container-2">
        <span>our partners</span><br/>
        <img src={nb} style={{marginTop:'5%',marginLeft:'6%'}}/>
        <img src={adidas} style={{marginLeft:'4%',marginTop:'5%'}}/>
        <img src={nike} style={{marginLeft:'4%',marginTop:'5%'}}/>
        </div>
    </div>)
}
export default Reason;