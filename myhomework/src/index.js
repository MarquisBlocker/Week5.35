import React from 'react';
import ReactDOM from 'react-dom';
import button from './Components/button';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Blue />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//----------------------//

ReactDOM.render(
  React.createElement(
    'div', 
    null, 
    'Hello World!!',
     //React.createElement("input")
     React.createElement('pre', null, new Date().toLocaleTimeString()
    )
  ),
  document.getElementById('root'),
);

// class ConditionalStyle extends React.Component {
//   render() {
//     return (
//       <div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
//         How do you like this?
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <ConditionalStyle />
// );

const SearchEngines = ({ engines }) => {
  return (
    <List>
      {engines.map(engine => <ClickableImage {...engine} />)}
    </List>
  );
};

ReactDOM.render(
 <SearchEngines engines={data} />,
 document.getElementById("mountNode")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
