import styled from 'styled-components';

export const DisplayBase = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

DisplayBase.Result = styled.h1`
    color: white;
    font-size: 2.5rem;
    padding-right: 2rem;
`;