import constants from '../constants/actionTypes'

export function yelpBusinessDetails(state = [], action) {
    switch (action.type) {
        case constants.BUSINESSES_DETAILS:
            return action.businessesDetails;

        default:
            return state;
    }
};

export function yelpBusinessReviews(state = [], action) {
    switch (action.type) {
        case constants.BUSINESSES_REVIEWS:
            return action.businessesReviews;

        default:
            return state;
    }
};
