import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('abc', {note: 'test note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: {note: 'test note'}
    })
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 100,
        note: 'Last month rend'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
});


test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    })
});

