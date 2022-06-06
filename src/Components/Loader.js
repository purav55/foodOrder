import React from 'react'
import { css } from "@emotion/react";
import { PuffLoader } from 'react-spinners';

const override = css`
position: absolute;
top: 50%;
transform: translate(0, -50%);
  border-color: red;
`;

const Loader = () => {
  return (
    <div className='loader-style'>
    <PuffLoader color={'black'} css={override} size={150} />
    </div>
  )
}

export default Loader