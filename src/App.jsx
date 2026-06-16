import { useState } from 'react'
import './App.css'
import data from './db/data'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'


function App() {
  const [shoes, setShoes] = useState(data)
  console.log(shoes)
  const navigate = useNavigate()

  return (
    <div className="App">
      <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a onClick={() => { navigate('/') }} className="text-xl font-bold tracking-wide hover:text-gray-300 
          transition-colors cursor-pointer">
            ShoesShop
          </a>

          <div className="flex space-x-6 ml-6 mr-auto">
            <a onClick={() => { navigate('/') }} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Home
            </a>
            <a onClick={() => { navigate('/about') }} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              <el-dropdown class="inline-block">
                <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
                  About
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </button>

                <el-menu anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                  <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Account settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Support</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">License</a>
                    <form action="#" method="POST">
                      <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Sign out</button>
                    </form>
                  </div>
                </el-menu>
              </el-dropdown>
            </a>
            <a onClick={() => { navigate('/detail/0') }} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Detail
            </a>
            <a onClick={() => { navigate('/cart') }} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Cart
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home shoes={shoes} />}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/about' element={<div>About 페이지 <Outlet></Outlet></div>}>
          <Route path='member' element={<div>멤버입니다</div>} />
          <Route path='location' element={<div>위치입니다</div>} />
        </Route>
        <Route path='*' element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </div>
  )
}

export default App
