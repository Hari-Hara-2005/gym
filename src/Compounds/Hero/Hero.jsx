import React from "react";
import Header from "../Heder/Header";
import heart from"../../assets/heart.png";
import hero_image_back from"../../assets/hero_image_back.png";
import hero_image from"../../assets/hero_image.png";
import calories from"../../assets/calories.png";
import'./Hero.css';
function Hero(){
    return(<div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
        <Header/>
        <div className="best-ad">
            <div>
            </div>
            <span>the best fitness club in the town</span>
        </div>
        <div className="logo-name">
            <span className="stroke">shape </span>
            <span>Your<br/><br/>ideal body</span>
        </div>
        <p>In Here We Will Help You To Shape And Build Your Ideal And Body And Live Up Your Life To<br/> Fullest</p>
       <div className="counting">
        <span>+138</span>
        <span>+978</span>
        <span>+39 </span>
       </div>
       <div className="counting-name">
        <span>Expert coaches</span>
        <span>member joined</span>
        <span>fitness Programs</span>
       </div>
       <div className="hero-back">
                <img src={ hero_image_back}/>
            </div>
            <div className="calories">
                <img src={ calories}/>
                <span>Calories burened</span>
                <span>220 Kcal</span>
            </div>
       <button className="btn">Get Started</button>
       <button  className="btn-1">Learn More</button>
        </div>
        <div className="right-h">
            <div>
            <button>Join Now</button>
            </div>
            <div className="heart">
                <img src={heart} />
                <span className="counting-n">Heart Rate</span>
                <span  className="count">116 bpm</span>
            </div>
            <div className="hero-image">
                <img src={ hero_image}/>
            </div>
        </div>
    </div>);
}
export default Hero;