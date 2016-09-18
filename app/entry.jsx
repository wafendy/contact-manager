require("../node_modules/bootstrap/dist/css/bootstrap.css");
require("./css/main.css");
require('react');
require('react-dom');
require('react-router');

import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

var Router = reactRouter.Router
var Route = reactRouter.Route
var Link = reactRouter.Link
var IndexRoute = reactRouter.IndexRoute
var hashHistory = reactRouter.hashHistory

const App = React.createClass({
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 main-container">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ContactList} />
        <Route path="/contacts/new" component={ContactForm}/>
        <Route path="/contacts/edit/:contactId" component={ContactForm}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
