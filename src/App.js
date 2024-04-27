import "./App.css";
import Graph from "./components/Graph";
import { AddTransactionModal } from "./components/elements/AddTransactionModal.js";
import { useState, useEffect } from "react";
import List from "./components/List";
import { setTransactionFromLocalStorage } from "./store/reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NoTransactions from "./components/elements/NoTransactions.js";

function App() {
  const selectTransactions = useSelector(
    (state) => state.transactions.transactions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let dataLocal = JSON.parse(localStorage.getItem("transactions"));

    dispatch(setTransactionFromLocalStorage(dataLocal));
  }, []);

  useEffect(()=>{
    console.log(selectTransactions)
  },[selectTransactions])

  const [toggle, setToggle] = useState(false);

  function toggleOn() {
    setToggle(true);
  }

  function toggleOff() {
    if (toggle) {
      setToggle(false);
    }
  }

  let intervalId;

  function startInterval() {
    intervalId = setInterval(myFunction, 1000); 
  }
  
  function stopInterval() {
    clearInterval(intervalId);
  }
  
  function myFunction() {
    console.log('Interval function is running...');
  }


  if (selectTransactions?.length > 0|| toggle) {
    return (
      <>
        <div className="App">
          <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
            <div>
              <Graph />
              <List />
            </div>
          </div>
        </div>
        {selectTransactions?.length > 0 &&
                <div
                className="addAnotherTransaction"
                onClick={() => {
                  toggleOn();
                }}
              >
                <svg
                  height="100%"
                  width="800px"
                  viewBox="0 0 48.467 48.467"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#010002"
                    d="M0.001,24.233c0,3.584,2.916,6.5,6.5,6.5h11.234v11.234c0,3.584,2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5V30.733h11.232c3.584,0,6.5-2.916,6.5-6.5s-2.916-6.5-6.5-6.5H30.736V6.5c0-3.584-2.916-6.5-6.5-6.5s-6.5,2.916-6.5,6.5v11.233H6.501C2.917,17.733,0.001,20.649,0.001,24.233z M18.236,20.733c1.379,0,2.5-1.122,2.5-2.5V6.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v11.733c0,1.378,1.121,2.5,2.5,2.5h11.732c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5H30.236c-1.379,0-2.5,1.122-2.5,2.5v11.734c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5V30.233c0-1.378-1.121-2.5-2.5-2.5H6.501c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5H18.236z"
                  />
                </svg>
              </div>
              }
        { toggle && <AddTransactionModal toggleOff={toggleOff}/>}
      </>
    );
  } 
  else {
  }
  if (!selectTransactions?.length && !toggle ) return  <NoTransactions toggleOn={toggleOn} className='no-transactions'/>
  
}

export default App;
