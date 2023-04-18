import {
  type ReactNode,
  createContext,
  useReducer,
  type Dispatch
} from 'react';
import { type TrackMdl } from '../../domain/model/track.mdl';
import { Player } from '../components/Player/Player';

export enum TracksActionType {
  PUSHTRACKS = 'push_tracks'
}
export enum TrackActionType {
  PUSHTRACK = 'push_track'
}
export enum TrackControlType {
  PLAYPAUSE = 'play_pause',
  VOLUME = 'volume'
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
interface Control {
  type: TrackControlType;
  payload: {
    play: {
      loading: boolean;
      state: boolean;
      next: boolean;
    };
    volume: number;
  };
}
interface Menu {
  type: MenuActionType;
  payload: boolean;
}
interface Query {
  type: QueryActionType;
  payload: string;
}

type AppActions = Track | Tracks | Menu | Query | Control;

interface AppState {
  tracks: TrackMdl[];
  trackSelected?: TrackMdl;
  menu: boolean;
  query: string;
  control: Control['payload'];
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
    case TrackControlType.PLAYPAUSE:
      return {
        ...state,
        control: payload
      };
    case TrackControlType.VOLUME:
      return {
        ...state,
        control: payload
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
  query: '21',
  control: {
    play: { loading: false, state: false, next: false },
    volume: 0.5
  }
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
      <Player />
      {children}
    </FoxbelContext.Provider>
  );
};
