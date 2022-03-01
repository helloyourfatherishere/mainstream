import React from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./components/Index.jsx"
import Search from "./components/Search.jsx"
import CategoryView from "./components/CategoryView.jsx";
import CreateAccount from "./components/CreateAccount.jsx"
import Login from "./components/Login.jsx"
import Forgot from "./components/Forgot.jsx"
import Feed from "./components/Feed.jsx"
import Cart from "./components/Cart.jsx"
import View from "./components/View.jsx"
import Error from "./components/Error.jsx"
import Images from "./components/Images.jsx"
var err_message= "you have just entered an invalid url this page does not exist.."
function App() {
  return (
          <>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/search/" component={Search}></Route>
            <Route exact path="/category/:cate" component={CategoryView}></Route>
            <Route exact path="/create-account" component={CreateAccount}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/forgot/:cate" component={Forgot}></Route>
            <Route exact path="/f/:sub" component={Feed}></Route>
            <Route exact path="/watch" component={Cart}></Route>
            <Route exact path="/view/:id" component={View}></Route>
            <Route exact path="*" render={()=>{return(<Error message={err_message} valid={true} path={"/"} title={"Go to Home"}></Error>)}}></Route>
          </Switch>
          </>
  )
}

export default App;
