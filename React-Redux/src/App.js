import React from 'react';
import { Route } from 'react-router';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Counter from './Components/Counter';
import List from './Components/List';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/list' component={List} />

  </Layout>
);
