import React from 'react'
import { data } from '../data'
import ListView from './ListView'
const ListContainer = () => {
    return (
        //this is the container that contain array of data and i passed it to the ListView component
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ListView data={data} />
        </div>
    )
}

export default ListContainer