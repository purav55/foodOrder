import React, { lazy } from 'react'
import {Routes,Route} from 'react-router-dom'
const HomePage = lazy(()=> import('./Pages/Home'))
// const Audio = lazy(()=> import('./Pages/Audio'))
// const Posters = lazy(()=> import('./Pages/Posters'))
// const SingleVideo = lazy(()=> import('./Pages/SingleVideo'))
// const Video = lazy(()=> import('./Pages/Video'))


const Routing = () => {
  return (
    <Routes>
          <Route exact path='/' element={<HomePage/>}/> 
        {/* <Route exact path='/clientaudio' element={<Audio/>}/>
        <Route exact path='/clientposters' element={<Posters/>}/>
        <Route exact path='/clientvideo' element={<Video/>}/>
        <Route exact path='/clientsinglevideo/:id' element={<SingleVideo/>}/> */}
    </Routes>
  )
}

export default Routing