import React from 'react'
import { Avatar, Typography, Button } from 'antd'
const { Title, Paragraph } = Typography

const Tile = ({ items }) => {
    const styledBtn = {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '18px 60px'
    }
    return (

        <div className='container'>
            <div className='cart'>
                <Avatar src={items.img} style={{ height: '70px', width: '70px' }} />
                <Title level={3}>{items.title}</Title>
                <Paragraph type='secondary'>{items.desc}</Paragraph>
                <Button className='button' style={styledBtn}><a href={items.url} >Action</a></Button>
            </div>
        </div>


    )
}

export default Tile