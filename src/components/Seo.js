import React from 'react'
import Helm from 'react-helmet'

const Seo = ({ title, description }) => {
    return (
        <Helm>
            <title>
                {title}
            </title>
            {description && <meta name='description' content={description} />}
        </Helm>
    )
}

export default Seo