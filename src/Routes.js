import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from './Component/Loader/Loader';

const Routes = () => (
<Suspense fallback={<Loader />}>
  <Switch>
    <Route exact path="/" component={lazy(() => import('./Views/Home/Home'))} />
    <Route exact path="/home" component={lazy(() => import('./Views/Home/Home'))} />
    <Route exact path="/contact" component={lazy(() => import('./Views/Contact/Contact'))} />
    <Route exact path="/blog" component={lazy(() => import('./Views/Blog/Blog'))} />
    <Route exact path="/portfolio" component={lazy(() => import('./Views/Portfolio/Portfolio'))} />
    <Route exact path="/about" component={lazy(() => import('./Views/About/About'))} />
    <Route exact path="/resume" component={lazy(() => import('./Views/Resume/Resume'))} />
  </Switch>
</Suspense>);

export default Routes;