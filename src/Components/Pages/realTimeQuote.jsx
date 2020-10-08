import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../../Redux/actions/actions';
import { __apiKey, __apiRealTime } from '../../__apis/__apis';

class RealTimeQuote extends Component {

    componentDidMount() {
        this.props.fetchQuote(__apiRealTime + __apiKey);

    }

    render() {
        console.log('dfgvbd', this.props.quote)

        const test = this.props.quote.map((res, i) => {
            return (
                <li key={i}>{res.volume}</li>
            )
        })

        return (
            <div>
                <ul>
                    {test}
                </ul>
            </div>
        )
    }
}


export default connect(state => (
    {
        quote: state.getChares.quote
    }
), { fetchQuote })(RealTimeQuote)