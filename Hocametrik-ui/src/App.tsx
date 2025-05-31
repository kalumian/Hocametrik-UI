import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import { Routes, Route, Link } from 'react-router-dom'
// import NotFound from './pages/NotFound'

import Universities from './pages/University/Universities'
import MainLayout from './Layouts/MainLayout'
import Faculties from './pages/Faculty/Faculties'
import Academics from './pages/Academic/Academics'
import Evaluations from './pages/Evaluation/Evaluations'
import Contact from './pages/Contact/contact'
function App() {

  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<MainLayout><Contact /></MainLayout>} />
        <Route path='/universities' element={<MainLayout><Universities /></MainLayout>} />
        <Route path="/universities/:universityId/faculties" element={<MainLayout children={<Faculties />} />} />
        <Route path="/universities/:universityId/faculties/:facultyId/academics" element={<MainLayout children={<Academics />} />} />
        <Route path="/universities/:universityId/faculties/:facultyId/academics/:academicId/evaluations" element={<MainLayout children={<Evaluations />} />} />
        {/* <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
