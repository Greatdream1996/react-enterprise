import { Layout } from 'antd'
import { Outlet, Link } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout
export default function layout() {
  return (
    <Layout className='layout'>
      <Header className='headerStyle'>Header</Header>
      <Layout hasSider>
        <Sider className='siderStyle'>Sider</Sider>
        <Content className='contentStyle'>
          <Link to='/layout/redux'> redux</Link>
          <Outlet />
        </Content>
      </Layout>
      <Footer className='footerStyle'>Footer</Footer>
    </Layout>
  )
}
