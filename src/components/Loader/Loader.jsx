import { RotatingLines } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <RotatingLines strokeColor="black" />
    </LoaderWrap>
  );
};
