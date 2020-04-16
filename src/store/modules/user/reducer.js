import produce from 'immer';

const INITIAL_VALUES = {
  profile: null,
};

export default function user(state = INITIAL_VALUES, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }

      default:
    }
  });
}
