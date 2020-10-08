import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompany } from '../../Redux/actions/actions';
import { __apiKey, __apiBasuUrl } from '../../__apis/__apis';
import './company.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class CompanyList extends Component {

    componentDidMount() {
        this.props.fetchCompany(__apiBasuUrl + __apiKey)
    }

    render() {




        const companyInfo = this.props.company.map((res, i) => {
            return (
                <div className='item'>
                    <div className='name'>
                        <TableCell key={i} align="right">{res.companyName}</TableCell>

                    </div>
                </div>
            )
        });
        return (

            <>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell align="right">company</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                {companyInfo}
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='container'>
                    <div className='users'>
                        <h1>Company</h1>
                        {companyInfo}
                    </div>

                </div>
            </>
        );
    }
}
export default connect(state => (
    {
        company: state.getChares.company,

    }
), { fetchCompany })(CompanyList);