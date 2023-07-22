import './App.css';

// let userName = 'tormuj@gmail.com'

let isLoggedIn = false;
function LogIn() {
  
  if (isLoggedIn) {
    return <div> <h1>User Logged in</h1></div>
  }
  return <div> <h1>Please Log in</h1></div>
} 

function submitHandler() {
  document.getElementById('logVal').value = ''
}


function App() {
  return (
    <div className="App">
     <input id='logVal' type="text"  />
     <div> <button onClick={submitHandler} >Submit</button></div>
      <h1>Helloooooooooo</h1>
      <LogIn isLoggedIn={''} />
    </div>
  );
}

export default App;
