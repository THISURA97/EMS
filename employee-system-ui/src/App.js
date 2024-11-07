import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
