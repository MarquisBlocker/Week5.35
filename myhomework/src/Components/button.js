import React, {Component} from 'react'
import '../css/button.css'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



class Blue extends Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div>
            <button type="submit">Submit Button</button>
         </div>)
         (<div>
         <button type="submit">Submit Button</button>
         </div>)
       
    }
}


// ReactDOM.render(
//     React.createElement(
//       "div",
//       null,
//       "Hello React ",
//       React.createElement("input")
//     ),
//     document.getElementById('mountNode2'),
//   );

// const render = () => {
//     document.getElementById('root').innerHTML = `
//       <div>
//         Hello HTML
//         <input />
//         <pre>${new Date().toLocaleTimeString()}</pre>
//       </div>
//     `;
//     ReactDOM.render(
//         React.createElement(
//           'div',
//           null,
//           'Hello React',
//           React.createElement('input', null),
//           React.createElement('pre', null, new Date().toLocaleTimeString())
//         ),
//         document.getElementById('root')
//       );
//     };
   
    class Test extends React.Component {
        render() {
          return <h1>Wow This is Insane</h1>
                
        }
      }
      
      ReactDOM.render(<Test />, document.getElementById('root'));
// !---Math Function
    //   const RandomValue = () => (
    //     <div>
    //       { Math.floor(Math.random() * 100) }
    //     </div>
    //   );
      
    //   ReactDOM.render('RandomValue');

    const data = [
        { href: "http://google.com", src: "google.png" },
        { href: "http://bing.com", src: "bing.png" },
        { href: "http://yahoo.com", src: "yahoo.png" }
      ];


      


  

            

            

          


  
  
  
export default Blue;