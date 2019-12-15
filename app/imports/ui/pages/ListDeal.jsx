import React from 'react';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Deals } from '../../api/deal/Deals';
import { Vendors } from '../../api/vendor/Vendors';
import DealItem from '../components/DealItem';

/** A simple static component to render some text for the landing page. */
class ListDeal extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      value: '',
      reset: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchReset = this.searchReset.bind(this);
  }

  updateSearch(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(e) {
    if (e.key === 'Enter') {
      this.setState({ search: this.state.value });
    }
  }

  searchReset() {
    this.setState({ search: this.state.reset });
    this.setState({ value: this.state.reset });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Deals</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Company Name</Table.HeaderCell>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.HeaderCell>Condition</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.deals.map((deal) => <DealItem key={deal._id} deal={deal} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListDeal.propTypes = {
  deals: PropTypes.array.isRequired,
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription1 = Meteor.subscribe('Vendors');
  const subscription2 = Meteor.subscribe('Deals');
  return {
    deals: Deals.find({}).fetch(),
    vendors: Vendors.find({}).fetch(),
    ready: subscription1.ready() && subscription2.ready(),
  };
})(ListDeal);
