import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Example from './pages/Example';
import Home from './pages/Home'
import Test from './pages/Test';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/example' element={<Example />} />
                <Route path='/test' element={<Test name="たかし"/>} />
            </Routes>
        </div>
    );
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));