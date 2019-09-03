import Layout from '../../components/layouts/layout';
import React from 'react';
import LoginComponent from '../../components/auth/login';
class Login extends React.Component {

  render() {

    console.log('layout');
    return (
      <Layout title='this is Login'>
        <LoginComponent />
      </Layout>
    );
  }
}

export default Login;