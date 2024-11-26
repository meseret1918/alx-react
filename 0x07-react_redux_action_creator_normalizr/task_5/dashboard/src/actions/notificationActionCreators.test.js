import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('Notification Action Creators', () => {
  test('markAsRead action creator returns the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };

    expect(markAsRead(index)).toEqual(expectedAction);
  });

  test('setNotificationFilter action creator returns the correct action', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };

    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});

