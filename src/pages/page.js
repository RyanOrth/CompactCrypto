import React, { Component } from 'react';
import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW
} from '../constants/action-types';

function page(PageComponent) {
  class ComposedPageComponent extends Component {
    state = {
      appState: COMPACT_VIEW
    };

    render() {
      return (
        <PageComponent
          {...this.props}
          appState={this.appState}
          />
      );
    }
  }

  return ComposedPageComponent;
}

export default page;