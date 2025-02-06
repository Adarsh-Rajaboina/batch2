// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <h1>welcome to my App</h1>
// // //     </div> 
        
      
    
// // //   );
// // // }

// // // export default App;

// // import React from "react";
// // import Navbarr from "./Navbarr";
// // import Main from "./Main";
// // import Sidebar1 from "./Sidebar1";
// // import Sidebar2 from "./Sidebar2";
// // import Footer from "./Footer";

// // class App extends React.Component {
// //   render() {
// //     return (
// //       <div className="App">
// //         <Navbarr />
// //         <Main></Main>
// //         <div className="side">
// //           <Sidebar1 />
// //           <Sidebar2 />
// //         </div>
// //         <Footer />
// //       </div>
// //     )
// //   }  
// // }
// // export default App;
// // import React,{ Component } from 'react'
// // import CBCPropEx1 from './CBCPropEx1';

// // export default class App extends Component {
// //   render () {
// //     return (
// //       <div>
// //         App
// //         <CBCPropEx1
// //         username="Uday"
// //         age={19}
// //         hobbies = {["Playing","Eating","Sleeping"]}
// //         address = {["hyd","miyapur"]}
// //         isMarried = {false}
// //         />
// //       </div>
// //     )
// //   }
// // }
// // export default App;
// import React from 'react'
// import PropsChildren from './PropsChildren'
// import SubChildreneProps from './SubChildreneProps'
//  const App = () => {
//   return (
//     <div>
//     <PropsChildren username ="uday" company = "amazon" >
//       <h1>This data is passing as  a Props children to child component</h1>
//     <SubChildreneProps/>
//     </PropsChildren>
//     </div>
//   )
//  }
//  export default App
import React from 'react'
import CBCStateEx from './CBCStateEx'

function App() {
  return (
    <div>
      <CBCStateEx/>
    </div>
  )
}

export default App