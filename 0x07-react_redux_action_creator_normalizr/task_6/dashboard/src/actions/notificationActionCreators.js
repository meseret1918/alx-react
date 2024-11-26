import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

// Bound Action Creators
export const boundNotificationActions = (dispatch) =>
  bindActionCreators(
    {
      markAsRead,
      setNotificationFilter,
    },
    dispatch
  );

