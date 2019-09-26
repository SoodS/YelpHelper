import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import BaseLayout from './components/layouts/BaseLayout';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import YelpSuggestions from './components/containers/YelpSuggestions';

import configureStore from './stores/store';

const store = configureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>

                <BaseLayout>
                    <Route exact path="/" component = {Home}/>
                    <Route exact path="/suggestions" component = {YelpSuggestions}/>
                    <Route path="/about" component = {About}/>
                </BaseLayout>

            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
