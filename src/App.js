import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getGuests, getLodgings, getDashboard} from './Model.tsx'
import Dashboard from './components/Dashboard';

function App() {
// const [lodging, setLodgingList] = useState(null)
// const [guests, setGuestList] = useState(null)
const [dashboard, setDashboard] = useState(null)

useEffect(() => {
  (async () => {
    let dashboardResult = await getDashboard();
    // let lodgingResult = await getLodgings();
    setDashboard(dashboardResult);
    // setLodgingList(lodgingResult);
  })();
}, []);

// console.log(dashboard)
  return (
    <div className="App">
      <Dashboard dashboard={dashboard}></Dashboard>
    </div>
  );
}

export default App;
