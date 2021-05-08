import { Route, Switch, BrowserRouter } from "react-router-dom";

import Layout from './Components/Layout/Layout';
import Landing from './pages/Landing/Landing';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
