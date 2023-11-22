import "./Menu.css";
import image from '../images/monstercat-logo.webp'

function Dropdown({handlehide,state}) {
    return (
        <div class={state.toString()}>
        <div className="box">
        <img className="logo2" src='https://cdn.monstercat.com/monstercat-logo.webp' alt="monstercatlogo" loading="lazy"/>
        <h2>mosntercat</h2>
        {!state && <i onClick={handlehide} className="fa-solid fa-x"></i>}

        </div>
        <div class="dropdown-content">
          <h2 class="link">MUSIC</h2>
          <h2 class="link">ARTISTS</h2>
          <h2 class="link">ABOUT</h2>
          <h2 class="link">NEWS</h2>
          <h2 class="link">EVENTS</h2>
          <h2 class="link">PROGRAMMING</h2>
          <h2 class="link">GOLD</h2>
          <h2 class="link">PARTNERS</h2>
          <h2 class="link">PLAYER</h2>
          <h2 class="link">PRESS</h2>
          <div class="icons-container">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitch"></i>
          </div>
        </div>
      </div>
    )
}

export default Dropdown