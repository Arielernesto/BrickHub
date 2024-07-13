import './App.css'
import './bootstrap.css'
import './bootstrap.bundle.min.js'
import { lazy } from 'react'

import { Home, About, PageServices, Contact} from './pages.jsx'
import { ExoRouter, Route} from './router/index.jsx' 
import { Suspense } from 'react'
const Projects = lazy(() => import('./Projects.jsx'))






function App() {
  // console.log(window.location.pathname)
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth'});
  // }, []);

  return (
    <Suspense fallback={<div className=' loading'>
    <div className="spinner-border text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    </div>}>
    <ExoRouter>

      <Route path="/" Component={Home}></Route>
      <Route path="/projects" Component={Projects}></Route>
      <Route path="/about-our" Component={About}></Route>
      <Route path="/services" Component={PageServices}></Route>
      <Route path="/contact" Component={Contact}></Route>

    </ExoRouter>
    </Suspense>
  )
}

export default App
