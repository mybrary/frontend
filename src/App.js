
import './App.css';
import {Route, Link} from 'react-router-dom'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <div className="App">
      <Route exact path = '/search/' component = {SearchResults} />
    </div>
  );
}

export default App;
