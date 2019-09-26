import { combineReducers } from 'redux';
import { yelpBusinessDetails, yelpBusinessReviews } from './reducer';

export default combineReducers({
    yelpBusinessDetails,
    yelpBusinessReviews
});