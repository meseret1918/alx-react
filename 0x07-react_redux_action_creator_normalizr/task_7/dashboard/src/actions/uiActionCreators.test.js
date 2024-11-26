import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  login,
} from './uiActionCreators';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when API call succeeds', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when API call fails', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

