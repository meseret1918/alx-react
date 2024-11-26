import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

// Bound Action Creators
export const boundCourseActions = (dispatch) =>
  bindActionCreators(
    {
      selectCourse,
      unSelectCourse,
    },
    dispatch
  );

