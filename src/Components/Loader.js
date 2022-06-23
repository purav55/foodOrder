import React from 'react'
import { css } from "@emotion/react";
import { ScaleLoader } from 'react-spinners';

const override = css`
position: absolute;
top: 50%;
transform: translate(0, -50%);
  border-color: red;
`;

const Loader = () => {
  return (
    <div className='loader-style'>
    <ScaleLoader color={'black'} css={override} size={130} />
    </div>
  )
}

export default Loader