import styled from 'styled-components';

export const ButtonBase = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    cursor: pointer;
    border: 0.1px solid lightgrey;
    transition: background-color .6s ease;
    position: relative;
    background-color: #f2f2f2;

    &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%,-50%,0);
    /* background: rgba(white,.1); */
    border-radius: 100%;
    z-index: 10;
    transition: width .2s ease, height .3s ease;
    background-color:#5f5f5f;
    opacity: 0.05;
  }

  &:hover {
      opacity: 0.9;
  }
  &:active {
    &:after {
      width: 100%;
      height: 100%;
    }
  }


`;

ButtonBase.Text = styled.p`
    font-weight: 700;
    font-size: 1.2rem;
`;