import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChares } from '../../Redux/actions/actions';

class Test extends Component {

    componentDidMount() {
        this.props.fetchChares('https://sandbox.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=Tsk_3045df9ed8cc40cdb30ce5d5b1074816')
    }
    render() {

        const test = this.props.companyName
        return (
            <div>
                {test.companyName}
            </div>
        );
    }
}
export default connect(state => (
    {
        companyName: state.getChares.companyName,
        latestPrice: state.getChares.latestPrice,
        latestTime: state.getChares.latestTime,
    }
), { fetchChares })(Test);