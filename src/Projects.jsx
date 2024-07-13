import { lazy } from 'react'
const MProjects = lazy(() => import('./mainProjects.jsx'))
import { Suspense } from 'react'



export default function Projects() {


    return (
        <Suspense fallback={<div className=' loading'>
     <div className="spinner-border text-warning" role="status">
 </div>
      </div>}>
      <MProjects></MProjects>
      </Suspense>
    )
  }