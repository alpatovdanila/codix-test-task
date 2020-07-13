export type TransportState = {
  fetching: boolean;
};

type SetFetchingAction = {
  type: '@transport/setFetching';
  payload: { fetching: boolean };
};
export const setFetching = (fetching: boolean): SetFetchingAction => ({
  type: '@transport/setFetching',
  payload: { fetching },
});

export const transport = (
  state: TransportState = {
    fetching: false,
  },
  action: SetFetchingAction
) => {
  if (action.type === '@transport/setFetching') {
    return { ...state, fetching: action.payload.fetching };
  }

  return state;
};
