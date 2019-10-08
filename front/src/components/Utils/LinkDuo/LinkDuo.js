import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import isExternal from 'is-url-external';

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
  render() {
    return isExternal(this.props.to) ?
      <a target="_blank"
        rel="noopener noreferrer"
        href={this.props.to}
        {...this.props}
      >{this.props.children}</a>
      :
      <Link alt="test" {...this.props}>{this.props.children}</Link>
  }
}
