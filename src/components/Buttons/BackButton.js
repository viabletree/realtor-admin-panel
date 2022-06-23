import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { goBack } from 'react-router-redux';
import PropTypes from 'prop-types';

class BackButton extends Component {
    handleClick = () => {
      this.props.goBack();
    };

    render() {
      return <Button variant="contained" color="primary" onClick={this.handleClick}>Go Back</Button>;
    }
}

BackButton.propTypes = {
  goBack: PropTypes.object,
};


export default connect(null, {
  goBack,
})(BackButton);
