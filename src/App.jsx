import Header from "./components/header/Header"
import './app.css'
import "./App"
import MenuPage from "./pages/menu/MenuPage"
import HomePage from "./pages/home-page/HomePage.jsx";

import {Routes, Route, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet/>
    </>
  )
}

function App() {

  return (
   <div>
    <Routes>
       <Route path="/" element={<Layout />  }>
         <Route path="/" element={<HomePage/>} />
         <Route path="/menu" element={<MenuPage />}  />
       </Route>
    </Routes>
   </div>
  )   
}

export default App





















// //component - App
// import Header from "./components/header/Header"

// import './app.css'
// import Hero from "./components/hero/hero"
// // import Welcome from "" />
// // <components />
// // <Ourmenu></Ourmenu>/Ourmenu"<div className="


// import Ourmenu from "./components/ourmenu/Ourmenu"


// function App() {

  


//   return (
//    <div>
//     <Header/>
//     <Hero/>
//     <Ourmenu/>
//    </div>
//   )
// }

// export default App



















// //component - App
// import Header from "./components/header/Header"

// import './app.css'
// import Hero from "./components/hero/hero"
// // import Welcome from "" />
// // <components />
// // <Ourmenu></Ourmenu>/Ourmenu"<div className="


// import Ourmenu from "./components/ourmenu/Ourmenu"

// function App() {

  


//   return (
//    <div>
//     <Header/>
//     <Hero/>
//     <Ourmenu/>
//    </div>
//   )
// }

// export default App
