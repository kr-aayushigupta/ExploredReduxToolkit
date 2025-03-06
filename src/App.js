import { useSelector,useDispatch} from 'react-redux';
import './App.css';
import './mycss.css';
import {actions} from "./store/index"
// useselctor is a custom of react-redux that lets your functional components to read data from store : here data from store is state 
function App() {
    const counter=useSelector((state)=>state.counter)
    const dispatch=useDispatch();
    
    const increment=()=>{
      dispatch(actions.increment());
    }

    const decrement=()=>{
      dispatch(actions.decrement());
      
    }

    const addby=()=>{
      dispatch(actions.addby(10));
      
    }
    const subby=()=>{
      dispatch(actions.subby(10));
      
    }
    const reset=()=>{
      dispatch(actions.reset(0));
      
    }

  return (
    <div >
      <h1 className='div1'>Counter App</h1>
      <h3 className='div2'>Using REDUX TOOLKIT in React app</h3>
      <h2 className='div1'>Counter : {counter}</h2>
      <div className='mydiv'>
      <button  onClick={increment}>Increment</button>
      
      <button onClick={decrement}>Decrement</button>
      <button  onClick={addby}>Increment by 10</button>
      <button  onClick={subby}>Decrement by 10</button>
      <button  onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
