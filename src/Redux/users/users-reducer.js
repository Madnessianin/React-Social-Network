import { usersAPI, profileAPI } from "../../Api/Api.js";

const FOLLOW = "social-network/users/FOLLOW",
  UNFOLLOW = "social-network/users/UNFOLLOW",
  SET_USERS = "social-network/users/SET_USERS",
  SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE",
  SET_TOTAL_USERS_COUNT = "social-network/users/SET_TOTAL_USERS_COUNT",
  TOGGLE_IS_FETCHING = "social-network/users/TOGGLE_IS_FETCHING",
  TOGGLE_IS_FOLLOWING_PROGRESS =
    "social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingIsProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id == action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingIsProgress: action.isFetching
          ? [...state.followingIsProgress, action.userId]
          : state.followingIsProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
/* Action Creators */
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

/* Thunk */
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
};
export const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await profileAPI.postUser(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await profileAPI.deleteUser(userId);
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
