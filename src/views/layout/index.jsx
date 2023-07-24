import { Layout, Space } from 'antd'

const { Header, Footer, Sider, Content } = Layout

export default function layout() {
  return (
    <Layout className='layout'>
      <Header className='headerStyle'>Header</Header>
      <Layout hasSider>
        <Sider className='siderStyle'>Sider</Sider>
        <Content className='contentStyle'>Content</Content>
      </Layout>
      <Footer className='footerStyle'>Footer</Footer>
    </Layout>
  )
}
