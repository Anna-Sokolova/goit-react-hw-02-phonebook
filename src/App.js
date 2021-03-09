import shortid from 'shortid';

let loginInputId = shortid.generate();
// console.log(loginInputId);

function App() {
  return <div id={loginInputId} className="App"></div>;
}

export default App;
