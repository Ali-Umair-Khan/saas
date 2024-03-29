import React from 'react'
import {pricing} from '../data.js';
import PricingComponent from './priceComponent.jsx';
import './pricing.scss'

const Pricing = () => {
  return (
    <div className='hero__pricing'>
        <h1>Pricing</h1>
        <h3>Start free and scale while you grow. No hidden fees. Unlimited users for free.</h3>
        <div className='hero__pricing_details'>
            <div className="hero__pricing-details-c"><PricingComponent features={pricing[0]}/></div>
            <div className="hero__pricing-details-c"><PricingComponent features={pricing[1]}/></div>
        </div>
    </div>
  )
}

export default Pricing