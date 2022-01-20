import { expect } from "chai";
import { getCompleteTodos } from '../redux/selector';

describe('The getCompletedTodos selector', () => {
  it('Returns only completd todos', () => {
    const fakeTodos = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
      {
        text: 'Say Goodbye',
        isCompleted: false,
      },
      {
        text: 'Climb mount everest',
        isCompleted: false,
      }
    ];

    const expected = [
      {
        text: 'Say Hello',
        isCompleted: true,
      }
    ];

    const actual = getCompleteTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected);
  });
});

