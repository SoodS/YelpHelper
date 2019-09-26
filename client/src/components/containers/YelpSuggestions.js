import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, forEach, eq, remove } from 'lodash';
import { getBusinessDetails} from '../../actions/actions';
import Review from './Review';
import index from "../../reducers/index";

export class YelpSuggestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            businessName: '',
            limit: ''
        };
    };

    componentDidMount() {

    };

    render() {

        let yelpBusinessSuggestions = [];

        if(!isEmpty(this.props.yelpBusinessDetails)) {
            yelpBusinessSuggestions = this.props.yelpBusinessDetails;
        }

        return (
            <div>
                <div>
                    <label className="label-heading">Location :: </label>
                    <input id="location" name="location" type="text" className="input-text" value={this.state.location} placeholder='Enter Location' onChange = {this.onChange}/>
                </div>
                <div>
                    <label className="label-heading">Business Name :: </label>
                    <input  id="businessName" name="businessName" type="text" className="input-text" value={this.state.businessName} placeholder='Enter Business Name' onChange = {this.onChange}/>
                </div>
                <div>
                    <label className="label-heading">Limit :: </label>
                    <input id="limit" name="limit" type="text" className="input-text" value={this.state.limit} placeholder='Enter Result Limit' onChange = {this.onChange}/>
                </div>

                <div >
                    <button className="action-buttons" onClick = {this.search}> Search </button>
                    <button className="action-buttons" onClick = {this.clear}> Clear </button>
                </div>

                <br/><br/><br/>

                <div>
                    <span className="search-text">Suggestions</span>
                    {
                        yelpBusinessSuggestions.map((suggestion,i) => {
                           return(
                               <div className="business" key={i}>
                                   <div className="business-header">
                                         <span className="span-text">{suggestion.name}</span>
                                         <span> : </span>
                                         <span className="span-text">{suggestion.location.address1} {suggestion.location.city}.</span>
                                   </div>

                                   <Review businessId={suggestion.id}/>
                               </div>)
                        })
                    }
                </div>

                <div>
                    {isEmpty(yelpBusinessSuggestions) &&
                        <div className="no-result">No Result Yet for your Search </div>
                    }
                </div>

            </div>
        )
    }

    onChange = e => this.setState({
                        [e.target.name]: e.target.value
                    });

    clear = e => this.setState({
                    location: '',
                    businessName: '',
                    limit: ''
                });

    search = e => this.props.fetchYelpBusinessDetails(this.state.location, this.state.businessName, this.state.limit);

};

YelpSuggestions.propTypes = {
    fetchYelpBusinessDetails : PropTypes.func.isRequired,
    yelpBusinessDetails : PropTypes.array.isRequired
};

YelpSuggestions.defaultProps ={

};

const mapStateToProps = (state) => {
    return {
        yelpBusinessDetails: state.yelpBusinessDetails

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchYelpBusinessDetails : (location, businessName, limit) => dispatch(getBusinessDetails(location, businessName, limit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YelpSuggestions);