import React, { Component } from 'react';
import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW,
} from '../constants/action-types';

function pageManager(PageComponent){
  class ComposedPageComponent extends Component {
    state = {
      appState: COMPACT_VIEW
    };

    // _handlePageSwitchAction = (currentPage) => {
    //   switch(currentPage) {
    //     case COMPACT_VIEW:
    //       this.setState(
    //         {
    //           appState: COMPACT_VIEW
    //         },
    //       this._handleAccountView(COMPACT_VIEW)
    //       );
    //       break;
    //     case DATA_VIEW:
    //       this.setState(
    //         {
    //           appState: DATA_VIEW
    //         },
    //       this._handleAccountView(DATA_VIEW)
    //       );
    //       break;
    //     case GRAPH_VIEW:
    //       this.setState(
    //         {
    //           appState: GRAPH_VIEW
    //         },
    //       this._handleAccountView(GRAPH_VIEW)
    //       );
    //       break;
    //     case ACCOUNT_VIEW:
    //       this.setState(
    //         {
    //           appState: ACCOUNT_VIEW
    //         },
    //       this._handleAccountView(ACCOUNT_VIEW)
    //       );
    //       break;
    //     default:
    //       break;
    //   }
    // }

    _handleCompactViewAction = () => {
      this.setState(
        {
          appState: COMPACT_VIEW
        },
      this._handleCompactViewPageSwitch
      );
    };

    _handleCompactViewPageSwitch = () => {
      const self = this;
      setTimeout(() => {
        self.setState({
          appState: COMPACT_VIEW
        });
      });
    };

    _handleDataViewAction = () => {
      this.setState(
        {
          appState: DATA_VIEW
        },
      this._handleDataViewPageSwitch
      );
    };

    _handleDataViewPageSwitch = () => {
      const self = this;
      setTimeout(() => {
        self.setState({
          appState: DATA_VIEW
        });
      });
    };

    _handleGraphViewAction = () => {
      this.setState(
        {
          appState: GRAPH_VIEW
        },
      this._handleGraphViewPageSwitch
      );
    };

    _handleGraphViewPageSwitch = () => {
      const self = this;
      setTimeout(() => {
        self.setState({
          appState: GRAPH_VIEW
        });
      });
    };

    _handleAccountViewAction = () => {
      this.setState(
        {
          appState: ACCOUNT_VIEW
        },
      this._handleAccountViewPageSwitch
      );
    };

    _handleAccountViewPageSwitch = () => {
      const self = this;
      setTimeout(() => {
        self.setState({
          appState: ACCOUNT_VIEW
        });
      });
    };

    render() {
      return (
        <PageComponent
          {...this.props}
          appState={this.appState}
          handleCompactViewAction={this._handleCompactViewAction}
          handleDataViewAction={this._handleDataViewAction}
          handleGraphViewAction={this._handleGraphViewAction}
          handleAccountViewAction={this._handleAccountViewAction}
          />
      );
    }
  }

  return ComposedPageComponent;
}

export default pageManager;