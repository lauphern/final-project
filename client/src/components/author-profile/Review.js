import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment'
import config from '../../config.json'

class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewer: {}
        }
    }
    getReviewerUsername = () => {
        axios({
            method: 'post',
            url: `${config.api}/reviewer`,
            data: {reviewerId: this.props.reviewer},
            withCredentials : true,
        }).then(databaseResponse => {
            this.setState({reviewer: databaseResponse.data})
        }).catch(err => {
            console.log(err)
        })
    }
    componentDidMount(){
        this.getReviewerUsername()
    }
    render() { 
        return (
            <div className="card">
                <div className="card-content">
                    <p className="title">
                        {this.props.opinion}
                    </p>
                    <p>Date <Moment format="D MMM YYYY" withTitle>{this.props.date}</Moment></p>
                    <p className="subtitle">
                        Username: {this.state.reviewer.username}
                    </p>
                </div>
                </div>
        );
    }
}
 
export default Review;