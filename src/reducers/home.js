import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants';

export default (state = {}, action) => {

  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
            hotels: action.payload[0]
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};