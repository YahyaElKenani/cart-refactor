import './App.css'
import { HashRouter as Router, Routes , Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'
import { productsContext } from './context/productsContext'
import Cart from './pages/Cart'
const products = [    
  { id: 1, title: "Dell G15-5520", category: "laptop", color: "Black", price: "36870", salePrice: "36270", imageURL: "/src/assets/images/labtop1.jpg" },
  { id: 2, title: "Lenovo V15", category: "laptop", color: "gray", price: "13333", salePrice: "13011", imageURL: "/src/assets/images/labtop2.jpg" },
  { id: 3, title: "HP Victus", category: "laptop", color: "Black", price: "47699", salePrice: "47438", imageURL: "/src/assets/images/labtop3.jpg" },
  { id: 4, title: "Dell Vostro", category: "laptop", color: "Black", price: "29660", salePrice: "29320", imageURL: "/src/assets/images/labtop4.jpg" },
  { id: 5, title: "R50i", category: "Earbuds", color: "Black", price: "1699", salePrice: "1399", imageURL: "/src/assets/images/Earbuds1.jpg" },
  { id: 6, title: "R100", category: "Earbuds", color: "White", price: "1600", salePrice: "1499", imageURL: "/src/assets/images/Earbuds.jpg" },
  { id: 7, title: "Life P2", category: "Earbuds", color: "Black", price: "2899", salePrice: "2699", imageURL: "/src/assets/images/Earbuds3.jpg" },
  { id: 8, title: "Life Note E", category: "Earbuds", color: "Black", price: "2485", salePrice: "1600", imageURL: "/src/assets/images/Earbuds4.jpg" },
  { id: 9, title: "Generic", category: "Over Ear", color: "Blue", price: "215", salePrice: "185", imageURL: "/src/assets/images/Over Ear1.jpg" },
  { id: 10, title: "Panduo", category: "smart watch", color: "Green", price: "450", salePrice: "375", imageURL: "/src/assets/images/smartwatch1.jpg" },
  { id: 11, title: "Muktrics", category: "smart watch", color: "Black", price: "400", salePrice: "350", imageURL: "/src/assets/images/smartwatch2.jpg" },
  { id: 12, title: "BigPlayer", category: "smart watch", color: "Brown", price: "730", salePrice: "650", imageURL: "/src/assets/images/smartwatch3.jpg" },
  { id: 13, title: "Samsung Galaxy A34", category: "phone", color: "Awesome Silver", price: "11286", salePrice: "10400", imageURL: "/src/assets/images/phone1.jpg" },
  { id: 14, title: "A24", category: "phone", color: "Black", price: "49900", salePrice: "38090", imageURL: "/src/assets/images/phone2.jpg" },
  { id: 15, title: "Oppo Reno 8T", category: "phone", Gold: "gray", price: "12793", salePrice: "12.445", imageURL: "/src/assets/images/phone3.jpg" },
  { id: 16, title: "Galaxy S22", category: "phone", color: "Green", price: "24299", salePrice: "24899", imageURL: "/src/assets/images/phone4.jpg" },
  { id: 17, title: "Galaxy S22 Ultra", category: "phone", color: "Phantom Black", price: "32800", salePrice: "33400", imageURL: "/src/assets/images/phone5.jpg" },
  { id: 18, title: "Galaxy S21", category: "phone", color: "Light Green", price: "21990", salePrice: "19299", imageURL: "/src/assets/images/phone6.jpg" },
  { id: 19, title: "Galaxy Z Fold5", category: "phone", color: "	Light blue", price: "73930", salePrice: "66000", imageURL: "/src/assets/images/phone7.jpg" }]
function App() {
  return (
    <productsContext.Provider value={products}> 
      <Router> 
        <Routes> 
          <Route 
          path='/' 
          element={<Homepage />}
          />

          <Route 
          path='/register' 
          element={<Register />}
          />

          <Route 
          path='/login' 
          element={<Login />}
          />

          <Route 
          path='/cart' 
          element={<Cart />}
          />
        </Routes>
      </Router>
    </productsContext.Provider>
  )
}

export default App
