import React from 'react';
import { Comment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AdminCheckVendor extends React.Component {
  render() {
    return (
        <Comment >
          <Comment.Content>
            <Comment.Author content={this.props.review.displayName} />
            <Comment.Metadata content={this.props.review.createdAt.toLocaleDateString('en-US')} />
            <Comment.Text>
              {this.props.review.review}
            </Comment.Text>
          </Comment.Content>
        </Comment>
    );
  }
}

/** Require a document to be passed to this component. */
AdminCheckVendor.propTypes = {
  review: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(AdminCheckVendor);
