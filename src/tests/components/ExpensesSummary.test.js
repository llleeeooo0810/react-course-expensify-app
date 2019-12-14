import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={12990} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={15} expensesTotal={512973217990} />);
    expect(wrapper).toMatchSnapshot();
});