import React from 'react';
import { ButtonBase } from './Button.styles';
const Button = ({char, onClick}) => {
    return (
        <ButtonBase onClick={onClick}>
            <ButtonBase.Text>{char}</ButtonBase.Text>
        </ButtonBase>
    );
}

export default Button;
