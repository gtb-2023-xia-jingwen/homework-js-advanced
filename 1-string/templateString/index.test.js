import getScoreOutput from './index';

test('通过学号输出考试成绩', () => {
  const person = {
    id: '1234',
    firstName: '明',
    lastName: '刘',
    score: 60,
  };
  const result = getScoreOutput(person);
  expect(result).toBe('你好，刘明！你的考试成绩为60分');
});
