import { useEffect, useState } from 'react';
import './App.css';
import PlayerContainer from './components/PlayerContainer';
import Button from './components/Button';
import logo from './images/logo@1x.png';
import progress from './images/icons/progress.svg';
import moneybag from './images/icons/money-bag.svg';
import notifyme from './images/icons/notify-me.svg';
import googleplay from './images/icons/google-play.svg';
import iosapp from './images/icons/ios-app.svg';

//player images
import James from './images/players/Lebron-James-PLP59D7092A6F6CEv2.png';
import Davis from './images/players/Anthony-Davis-PLP59D70938C0B3Ev2.png';
import Gordon from './images/players/Aaron Gordon -PLP59D7092156491v2.png';
import Siakam from './images/players/Pascal-Siakam-PLP59D70927CC6DD.png';
import Leonard from './images/players/Kawhi-Leonard-PLP59D7093A107E7v2.png';
import Lowry from './images/players/Kyle-Lowry-PLP59D70927DF104.png';
import Russell from './images/players/Dangelo Russell PLP59D709255D994v4.png';

function App() {
  const [players, setPlayers] = useState([]);
  const playerInfo = [];
  let zPos = 1000; //for overlapping player headshot from right to left
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json')
      .then(res => res.json())
      .then(data => setPlayers(data.players))
  }, [])
  for(let i in players) { //get player stats and assign images according to name
    const p = players[i].last_name;
    let imgSrc;
    if(p === "James") {
      imgSrc = James;
    } else if(p === "Davis") {
      imgSrc = Davis;
    } else if(p === "Gordon") {
      imgSrc = Gordon;
    } else if(p === "Siakam") {
      imgSrc = Siakam;
    } else if(p === "Leonard") {
      imgSrc = Leonard;
    } else if(p === "Lowry") {
      imgSrc = Lowry;
    } else if(p === "Russell") {
      imgSrc = Russell
    }
    playerInfo.push(
      //setting the initial z index of first zPos minus 1
      <div key={i} style={{zIndex: zPos--}}>
        <PlayerContainer imageSrc={imgSrc} playerName={players[i].last_name.toUpperCase()} playerPoints={players[i].points}/>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="PlaylineLogo"/>
      </div>
      <div className="lotto-container">
        <img className="progress-img" src={progress} alt="progress" />
        <div className="morgan-font">YOUR PLAYLINE IS SET!</div>
        <div className="morgan-font txt-comeback">COME BACK @ 7:30PM TO TRACK IT LIVE!</div>
        <div className="line-div" />
        <div className="tip-text">Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area</div>
        <div className="p-stats">
          {playerInfo}
        </div>
        <div className="btn-container">
          <div className="btn-notifyme-container">
            <Button onClick={() => alert("clicked notify")} iconImg={notifyme} btnText={"NOTIFY ME"} />
          </div>
          <div className="btn-moneybag-container">
            <Button onClick={() => alert("clicked deposit")} iconImg={moneybag} btnText={"DEPOSIT"} />
          </div>
        </div>
        <div className="line-div" />

        <div><strong>DOWNLOAD THE APP</strong></div>
        <div className="btn-download-container">
          <img onClick={() => alert("download for ios")} className="btn-download" src={iosapp} alt="iosapp"/>
          <img onClick={() => alert("download for android")} className="btn-download" src={googleplay} alt="googleplay" />
        </div>
      </div>
      <div className="link-container">
        <div onClick={() => alert("about")}><span>ABOUT</span></div>
        <div onClick={() => alert("plb bonus")}><span>PLB BONUS</span></div>
        <div onClick={() => alert("contact")}><span>CONTACT</span></div>
        <div onClick={() => alert("security")}><span>SECURITY</span></div>
        <div onClick={() => alert("responsible play")}><span>RESPONSIBLE PLAY</span></div>
        <div onClick={() => alert("privacy")}><span>PRIVACY</span></div>
        <div onClick={() => alert("terms")}><span>TERMS</span></div>
      </div>
    </div>
  );
}

export default App;
