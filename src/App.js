//  Component Importing
import Navbar from "./Navbar"
import Home from "./Home";
import Menu from "./Menu";
import OrderList from "./OrderList";
import Contact from "./Contact"
import Location from "./Location"
import Footer from "./Footer"
import useFetch from "./useFetch";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  let url = "http://localhost:5000/dishes"
  const {data: dishes, isPending, error} = useFetch(url)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/">
              <Home />
            </ Route>
          
            <Route path="/Menu">
              <Menu title="Menu" url={url} dishes={dishes}>
                { isPending && <div className="error">Loading...</div>}
                { error && <div className="error">Can't fetch for this resource :(</div>}
              </ Menu>
            </Route>
          
          <Route path="/OrderList">
            <OrderList title="My Order"/>
          </Route>

          <Route path={"/Contact"}>
            <Contact  />
          </Route>

            <Route path={"/Location"}>
              <Location/>
            </Route>

        </ Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
