import HeroImg from '../../assets/image2.png';
import './ourmenu.css';

function Welcome() {
  return (
    <div className="our-menu">
      <div className="left-w">
        <img src={HeroImg} alt="Delizioso" className="hero-img" />
      </div>

      <div className="right-w">
        <h1 className="menu-h1">
          Welcome to <br />
          <span className="menu-span">delizioso</span>
        </h1>
        <p className="menu-p">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Facilisis ultricies at eleifend <br />
          proin. Congue nibh nulla malesuada <br />
          ultricies nec quam
        </p>
        <button className="menu-button">See our menu</button>
      </div>
    </div>
  );
}

export default Welcome;