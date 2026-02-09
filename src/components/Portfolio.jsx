import React from 'react'
import PortfolioGrid from './PortfolioGrid'
import ScrollPortfolio from './ScrollPortfolio'

const Portfolio = () => {
    
  return (
   
    <div>
        <h1 className='text-[#E85D04]/80 text-5xl font-serif text-center tracking-widest'>Our Portfolio</h1>
        <ScrollPortfolio />
        <PortfolioGrid />
        
    </div>
  )
}

export default Portfolio