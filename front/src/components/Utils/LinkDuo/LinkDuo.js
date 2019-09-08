import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import isExternal from 'is-url-external';

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
  render() {
      console.log(isExternal("/https://onelink.quickgifts.com/merchant/mike-shannons-grill-edwardsville/"))
    return isExternal(this.props.to) ?
      <a
        href={this.props.to}
        {...this.props}
      />
      :
      <Link {...this.props} />
  }
}
