import { TodoType } from './types/todo';

// 型の中から必要なプロパティを指定: Pick<型, 必要なプロパティ>
// 型の中から不要なプロパティを指定: Omit<型, 不要なプロパティ>
export const Todo = (
  props: Pick<TodoType, 'userId' | 'title' | 'completed'>
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? '[完]' : '[未]';
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
