import {Routes, Route} from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import BagPage from './Pages/BagPage';
import AdminPage from './Pages/AdminPage';
import AdminEditPage from './Pages/AdminEditPage';

function MainComponent() {
  
  return (
    <main>
        <Routes>
            <Route path='/' element={<ProductsPage/>}/>
            <Route path='/bag' element={<BagPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/admin-edit' element={<AdminEditPage/>}/>
        </Routes>
    </main>
  )
}

export default MainComponent
