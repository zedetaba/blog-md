import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/Seo'


const Index = () => {
    return (
        <div>
            <Seo title='Blog PowerSites' description='Descrição do blog para os mecanismos de busca' />
            <h1>PowerSites</h1>
            <p>
                <Link to='/blog'>Blog</Link>
            </p>
        </div>
    )
}

export default Index