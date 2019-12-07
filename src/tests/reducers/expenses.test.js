import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should NOT remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Some bill',
        note: '',
        amount: 1000,
        createdAt: 90000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense 
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense]);
});

test('should edit an expense', () => {
    const note = 'updated';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: { note } 
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].note).toBe(note);
});

test('should not edit an expense if id not found', () => {
    const note = 'updated';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { note } 
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});