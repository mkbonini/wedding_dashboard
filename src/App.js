
import './App.css';
import {useEffect, useState} from 'react';
import { getDashboard} from './Model.tsx'
import Dashboard from './components/Dashboard';

function App() {
const [dashboard, setDashboard] = useState(null)

// useEffect(() => {
//   (async () => {
//     let dashboardResult = await getDashboard();
//     setDashboard(dashboardResult);
//   })();
// }, []);

  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
