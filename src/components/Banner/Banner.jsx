import React from 'react'
import { AppContext } from '../App/App'

export const Banner = () => {
  
  const { langData, activeIndex, setActiveIndex } = React.useContext(AppContext)
 
  return (
    <div className='banner'>
        <div className="container">
            <h3>{langData[activeIndex].help}</h3>
            <p>{langData[activeIndex].helpTitle}</p>
        </div>
    </div>
  )
}
