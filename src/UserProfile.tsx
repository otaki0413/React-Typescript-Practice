import { VFC } from 'react';
import { User } from './types/user';

type Props = {
  user: User;
};

// ?.　はオプショナルチェイニングという
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  console.log(user.hobbies);
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(' / ')}</dd>
    </dl>
  );
};
