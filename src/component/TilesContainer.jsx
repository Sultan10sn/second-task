import React from 'react'
import { data } from '../data'
import Tile from './Tile'

const TilesContainer = () => {
    return (
        <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {data.map(items => {
                return <Tile key={items.id} items={items} />
            })}
        </div>
    )
}

export default TilesContainer