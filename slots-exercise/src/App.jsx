import './App.css'
import Slots from './Slots'
import Clicker from './Clicker'
function App() {
  return(
    <div>
      <Clicker message="Hello" buttonText="Click me"/>
      {/* <Slots val1="🍒" val2="🍒" val3="🍒"/>
      <Slots val1="🍒" val2="🍑" val3="🍒"/>
      <Slots/> */}
    </div>
  ) 
}

export default App
