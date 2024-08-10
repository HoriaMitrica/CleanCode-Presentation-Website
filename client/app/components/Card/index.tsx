import { CardProps } from '@models/card'
import React from 'react'

const Card: React.FC<CardProps> = ({ name, description, icon }) => {
    return (
        <div>
            <h3>
                {name}
            </h3>
            {icon && <image></image>}
            <div>
                {description}
            </div>
            <hr />
        </div>
    )
}
export default Card
