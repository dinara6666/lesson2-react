import WelcomeImg from '../../assets/image2.png';
import './welcome.css';

function Welcome() {
    return (
        <div className="welcome">
            <div className='container'>
                <div className="welcome-img">
                    <img width={690} src={WelcomeImg} alt=""/>
                </div>
                <div className="welcome-text">
                    <h1>Welcome to <br/>
                        <span>delizioso</span>
                    </h1>
                    <p className='p-come'>Lorem ipsum dolor
                        sit
                        amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada
                        ultricies nec quam
                    </p>
                    <div className='welcome-buttons'>
                        <button className='btn'>See our menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;