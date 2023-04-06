import {
  type ReactNode,
  createContext,
  useReducer,
  type Dispatch
} from 'react';
import { type TrackMdl } from '../../domain/model/track.mdl';

export enum TracksActionType {
  PUSHTRACKS = 'push_tracks'
}
export enum TrackActionType {
  PUSHTRACK = 'push_track'
}
export enum MenuActionType {
  HANDLEMENU = 'handle_menu'
}
export enum QueryActionType {
  CHANGEQUERY = 'change_query'
}

interface Tracks {
  type: TracksActionType;
  payload: TrackMdl[];
}
interface Track {
  type: TrackActionType;
  payload: TrackMdl;
}
interface Menu {
  type: MenuActionType;
  payload: boolean;
}
interface Query {
  type: QueryActionType;
  payload: string;
}

type AppActions = Track | Tracks | Menu | Query;

interface AppState {
  tracks: TrackMdl[];
  trackSelected?: TrackMdl;
  menu: boolean;
  query: string;
}
function reducer(
  state: AppState,
  action: AppActions
): AppState {
  const { type, payload } = action;
  switch (type) {
    case MenuActionType.HANDLEMENU:
      return {
        ...state,
        menu: payload
      };
    case TrackActionType.PUSHTRACK:
      return {
        ...state,
        trackSelected: payload
      };
    case TracksActionType.PUSHTRACKS:
      return {
        ...state,
        tracks: payload
      };
    case QueryActionType.CHANGEQUERY:
      return {
        ...state,
        query: payload
      };
  }
}
interface ProviderT {
  state: AppState;
  dispatch: Dispatch<AppActions>;
}

const defaultState: AppState = {
  menu: false,
  tracks: [],
  query: '21'
};
export const defaulProps: ProviderT = {
  state: defaultState,
  dispatch: (action) => {}
};

export const FoxbelContext = createContext(defaulProps);

export const FoxbelProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    defaultState
  );
  return (
    <FoxbelContext.Provider value={{ state, dispatch }}>
      {children}
    </FoxbelContext.Provider>
  );
};
