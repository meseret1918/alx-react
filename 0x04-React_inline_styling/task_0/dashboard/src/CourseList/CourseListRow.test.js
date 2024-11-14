import { shallow } from "enzyme"; 
import React from "react";
import CourseListRow from "./CourseListRow";

describe('Test CourseListRow.js', () => {
  it('CourseListRow renders without crashing', () => {
    expect(shallow(<CourseListRow textFirstCell='test' />).exists()).toBe(true);
  });

  it('renders one <th> with colspan of 2 when isHeader is true and only textFirstCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual("2");
  });

  it('renders two <th> elements when isHeader is true and both textFirstCell and textSecondCell are provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders two <td> elements when isHeader is false and both textFirstCell and textSecondCell are provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('td')).toHaveLength(2);
  });

  it('renders 0 as default for textSecondCell when it is not provided and isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
    expect(wrapper.find('td').at(1).text()).toEqual("0");  // Verify default to 0
  });
});
