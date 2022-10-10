import React from 'react'
import { List, Typography } from 'antd'
const { Title } = Typography

//this is the ListView component that take my array of data and render it 

const ListView = ({ data }) => {
    return (
        <div style={{ display: 'block', width: 700, padding: 20, justifyContent: 'center' }}>
            <Title style={{ textAlign: 'center' }} level={2}>antd List components</Title>

            <List
                itemLayout='horizontal'
                bordered
                // this is the datasource for my array of data that dose not work with me you can uncomment the datasource below and see 
                //   dataSource={data}
                renderItem={item => (
                    <List.Item
                        key={item.id}
                    >

                    </List.Item>
                )}

            />


        </div>
    )
}

export default ListView