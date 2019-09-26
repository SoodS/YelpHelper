import actionTypes from '../constants/actionTypes';
import axios from 'axios';

export function yelpBusinessesDetails(businessesDetails){
    return {
        type: actionTypes.BUSINESSES_DETAILS,
        businessesDetails
    };
};

export function getBusinessDetails(location, businessName, limit) {
    let queryParams = 'location=' + encodeURIComponent(location) + '&businessName=' + encodeURIComponent(businessName) + '&limit=' + encodeURIComponent(limit);

    return(dispatch) => {
        axios.get('yelp/suggestions?' + queryParams)
            .then((response) => {
                return response.data.data.businesses;
            })
            .then((businesses) => {
                console.log(businesses);
                dispatch(yelpBusinessesDetails(businesses));
            }).catch(() => {
                console.log('Error Loading business Details..');
                dispatch(yelpBusinessesDetails([]));
        })
    }
};

export function yelpBusinessesReviews(businessesReviews){
    return {
        type: actionTypes.BUSINESSES_REVIEWS,
        businessesReviews
    };
};

export function getBusinessReviews(id) {
    let queryParams = 'id=' + encodeURIComponent(id);

    return(dispatch) => {
        axios.get('yelp/reviews?' + queryParams)
            .then((response) => {
                return response.data.data.reviews;
            })
            .then((reviews) => {
                console.log(reviews);
                dispatch(yelpBusinessesReviews(reviews));
            }).catch(() => {
                console.log('Error Loading reviews Details..');
                dispatch(yelpBusinessesReviews([]));
        })
    }
};