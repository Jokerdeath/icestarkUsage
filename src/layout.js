import React from 'react'
import { Layout, Menu } from 'antd'
import { AppLink } from '@ice/stark'
const { Sider, Content } = Layout

const LayoutApp = () => {
    return (
        <Layout style={{minWidth: '250px', height: '100vh'}}>
            <Sider>
                <Menu theme="dark">
                    <Menu.Item key="user">
                        <AppLink to="/user">用户</AppLink>
                    </Menu.Item>
                    <Menu.Item key="store">
                        <AppLink to="/store">商户</AppLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content>
                    23333
                </Content>
            </Layout>
        </Layout>
    )
}
export default LayoutApp