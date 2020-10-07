import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChares, getCompanyName } from '../../Redux/actions/actions';
import { __apiKey, __apiBasuUrl } from '../../__apis/__apis';

class CompanyList extends Component {

    componentDidMount() {
        this.props.fetchChares(__apiBasuUrl + __apiKey)
    }


    render() {
        const companyInfo = this.props.company.map((res, i) => {
            return (
                <li key={i}>{res.companyName} {res.symbol}</li>

            )
        });
        return (
            <div>
                <ul>

                    {companyInfo}

                </ul>
            </div>
        );
    }
}
export default connect(state => (
    {
        company: state.getChares.companyName,
        symbol: state.getChares.symbol
    }
), { fetchChares, getCompanyName })(CompanyList);