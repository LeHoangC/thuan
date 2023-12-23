import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/datail" element={<Details />}></Route>
            </Routes>
        </>
    )
}
export default App
