import React from 'react'
import Log from '../components/log'

const Profil = () => {
return(
  <div className='profil-page'>
    <div className="log-container">
      <Log signin={true} signup={false} />

    </div>
  </div>
  )
}
export default Profil