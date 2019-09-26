import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, forEach, eq, remove } from 'lodash';
import { getBusinessReviews} from '../../actions/actions';
import index from "../../reducers/index";

export class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentDidMount() {
        this.props.fetchYelpBusinessReviews(this.props.businessId);
    };

    render() {

        let yelpBusinessReviews = [];

        if(!isEmpty(this.props.yelpBusinessReviews)) {
            yelpBusinessReviews = this.props.yelpBusinessReviews;
        }
        return(
            <div className="review-box">
                Reviews
                {
                    yelpBusinessReviews.map((review,i) => {

                       return(
                           <div className="review" key={i}>
                                <div>
                                    <span className="span-text">{review.user.name}</span>
                                    <span> : </span>
                                    <span className="span-text"> {review.text}</span>
                                </div>
                           </div>)
                    })
                }
            </div>

        )
    }

};

Review.propTypes = {
    fetchYelpBusinessReviews : PropTypes.func.isRequired,
    yelpBusinessReviews : PropTypes.array.isRequired,
    businessId: PropTypes.string.isRequired
};

Review.defaultProps ={

};

const mapStateToProps = (state) => {
    return {
        yelpBusinessReviews: state.yelpBusinessReviews
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchYelpBusinessReviews : (id) => dispatch(getBusinessReviews(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);