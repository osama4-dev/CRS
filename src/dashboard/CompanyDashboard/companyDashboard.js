import React, { useState, useEffect } from 'react'
import CompanyContainer from '../../Containers/companyContainer/companyContainer'
import Company_Data from '../../Data/Company.data'
import './companyDashboard.css'
import button from '../../components/button'

function CompanyDashboard(props) {
    // const [FullName,setFullName]= useState('');

    return (
        <div className="company__dashboard">
        {Company_Data.map((company)=>
        (
            <div className="company__containera"  key={company.id}>
            <CompanyContainer
            image={company.image}
            name={company.name}
            description={company.description}
            button="View Profile"
            />
            
            </div>
        ))}
        
    </div>
    )
}

export default CompanyDashboard
