import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Deal table. See pages/ListDeal.jsx. */
class DealItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.deal.companyName}</Table.Cell>
          <Table.Cell>{this.props.deal.address}</Table.Cell>
          <Table.Cell>{this.props.deal.owner}</Table.Cell>
          <Table.Cell>{this.props.deal.item}</Table.Cell>
          <Table.Cell>{this.props.deal.discount}</Table.Cell>
          <Table.Cell>{this.props.deal.price}</Table.Cell>
          <Table.Cell>{this.props.deal.startTime}</Table.Cell>
          <Table.Cell>{this.props.deal.endTime}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
DealItem.propTypes = {
  deal: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(DealItem);
