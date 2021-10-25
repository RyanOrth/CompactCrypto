import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW,
} from "../constants/action-types";

export const switchToCompactView = () => ({
  type: COMPACT_VIEW,
});

export const switchToDataView = () => ({
  type: DATA_VIEW
});

export const switchToGraphView = () => ({
  type: GRAPH_VIEW
});

export const switchToAccountView = () => ({
  type: ACCOUNT_VIEW,
});

// export const switchToAccountView = duration => ({
//   type: ACCOUNT_VIEW,
//   payload: duration
// });