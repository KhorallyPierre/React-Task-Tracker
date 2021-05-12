// .. everyhting rendered on the page is from this file
// import React from 'react'
import Header from './components/Header'
const App = () => {
  return (
    // // only one single parent element can be reutnr in the div
    // we can pass anything we want in to retrieve a prop
      // js can be written right in here
    <div className = "container" >

      <Header / >

    </div>
  )
}
// class App extends React.Component {
//   render() {
//     return <h1 > Hello from a class </h1>
//   }
// }


export default App;
