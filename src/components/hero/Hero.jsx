import HeroImg from '../../assets/image.png'

import './hero.css'


function Hero() {
    return (
        <div className="hero container">
            <div className="hero-text">
                <p className="p-title">Reastarent</p>
                <h1>Italian <br /> Cuisini</h1>

                <p className="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sodales senectus dictum arcu sit tristique <br /> donec eget.
                </p>

                <div className="hero-buttons">
                    <button className="btn">Order now</button>
                    <button className="btn">Reastaren</button>

                </div>
            </div>


            <div className="hero-img">
                <img src={HeroImg} alt="" />
            </div>
        </div>


    )
}


export default Hero;