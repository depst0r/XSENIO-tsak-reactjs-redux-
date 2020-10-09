import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompany } from '../../Redux/actions/actions'
import { __apiKey, __apiBasuUrl } from '../../__apis/__apis'
import styles from './page.module.scss'


class CompanyList extends Component {

    componentDidMount() {
        this.props.fetchCompany(__apiBasuUrl + __apiKey)
    }

    render() {
        const companyInfo = this.props.company.map((res, i) => {
            return (
                <>
                    <tr>
                        <td>{res.companyName} </td>
                        <td>{res.change} </td>
                        <td>{res.latestPrice} </td>
                    </tr>
                </>
            )
        })

        return (
            <>
                <div>
                    <table className={styles.table_dark}>
                        <tbody>
                            <tr>
                                <th>Company</th>
                                <th>Change</th>
                                <th>LatestPrice</th>
                            </tr>
                            {companyInfo}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
export default connect(state => (
    {
        company: state.getChares.company,

    }
), { fetchCompany })(CompanyList)