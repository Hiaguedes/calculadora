import styled from 'styled-components';

export const ButtonBase = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;

ButtonBase.Text = styled.p`
    font-weight: 700;
`;