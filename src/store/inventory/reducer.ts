import { Reducer } from 'redux';
import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  InventoryState
} from './types';

// state 인터페이스
export const initialState: InventoryState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<InventoryState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case FETCH_ERROR: {
      console.log('Error');
      return { ...state, loading: false, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as InventoryReducer };
