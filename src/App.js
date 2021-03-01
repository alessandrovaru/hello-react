import "./App.css";
import Badges from "./pages/Badges";
import BadgeNew from "./pages/BadgeNew";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
