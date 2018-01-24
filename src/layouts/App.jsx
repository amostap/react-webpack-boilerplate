import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'components';

class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps)(App);
