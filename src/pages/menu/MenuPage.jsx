import './menu-page.css'
import {useState} from "react";

const  MenuPage = () => {

    const menu = ['All category', 'Dinner','lunch','Desserts', 'Drink' ];
// hooks useState

    const [activeButton, setActiveButton] =useState( 'All category' );

    return (
        <div className="container">
            <h2 className="menu" >Menu</h2>


            <div style={{
                display: 'flex',
                justifyContent:'center',

            }}>

            {menu.map((item, index) => (<button
               onClick={ ()  => setActiveButton(item)}
                style={{
                   marginLeft: '27px' ,
                    backgroundColor: activeButton === item ? "black" :  '#d0ccc710',
                    color:  activeButton === item ? "white": "black",
                }}
                className='btn' key={index}>{item}</button>))}
        </div>

        </div>
    )
}

export default MenuPage;