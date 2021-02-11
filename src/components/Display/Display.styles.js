import styled from 'styled-components';

export const DisplayBase = styled.div`
    height: 20vh;
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0;
    align-items: center;
`;

DisplayBase.Result = styled.h1`
    color: white;
    font-size: 2.5rem;
    padding-right: 2rem;
`;