import { VFC } from 'react';

type Props = {
  color: string;
  fontSize: string;
};

// FC:  暗黙的にchildrenを受け取れてしまう
// VFC: childrenを暗黙的に含まないFC

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです。</p>;
};
