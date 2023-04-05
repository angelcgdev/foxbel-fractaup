import { ReactNode, createContext, useReducer, Dispatch } from 'react';
import { TrackMdl } from '../../domain/model/track.mdl';

export enum TracksActionType {
  PUSHTRACKS = 'push_tracks',
}
export enum TrackActionType {
  PUSHTRACK = 'push_track',
}
export enum MenuActionType {
  HANDLEMENU = 'handle_menu',
}
export enum QueryActionType {
  CHANGEQUERY = 'change_query',
}

type Tracks = {
  type: TracksActionType;
  payload: TrackMdl[];
};
type Track = {
  type: TrackActionType;
  payload: TrackMdl;
};
type Menu = {
  type: MenuActionType;
  payload: boolean;
};
type Query = {
  type: QueryActionType;
  payload: string;
};

type AppActions = Track | Tracks | Menu | Query;

type AppState = {
  tracks: TrackMdl[];
  trackSelected?: TrackMdl;
  menu: boolean;
  query: string;
};
function reducer(state: AppState, action: AppActions): AppState {
  const { type, payload } = action;
  switch (type) {
    case MenuActionType.HANDLEMENU:
      return {
        ...state,
        menu: payload,
      };
    case TrackActionType.PUSHTRACK:
      return {
        ...state,
        trackSelected: payload,
      };
    case TracksActionType.PUSHTRACKS:
      return {
        ...state,
        tracks: payload,
      };
    case QueryActionType.CHANGEQUERY:
      return {
        ...state,
        query: payload,
      };
  }
}
type ProviderT = {
  state: AppState;
  dispatch: Dispatch<AppActions>;
};

const defaultState: AppState = {
  menu: false,
  tracks: [],
  query: '21',
};
const defaulProps: ProviderT = {
  state: defaultState,
  dispatch: (action) => {},
};

export const FoxbelContext = createContext(defaulProps);

export const FoxbelProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <FoxbelContext.Provider value={{ state, dispatch }}>
      {children}
    </FoxbelContext.Provider>
  );
};
