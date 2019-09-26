import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Top Business</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/suggestions'}>Yelp Suggestions</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default BaseLayout;