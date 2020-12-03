import React from 'react';
import { Layout } from 'antd';
import Header from './Components/Header.jsx';
import Content from './Components/Content/Content.jsx';

const { Content: AntContent, Footer } = Layout;

const App = () => (
  <>
    <Layout>
      <Header theme="dark">Header</Header>
      <AntContent theme="dark">
        <Content />
      </AntContent>
      <Footer theme="dark">Footer</Footer>
    </Layout>
  </>
);

export default App;
