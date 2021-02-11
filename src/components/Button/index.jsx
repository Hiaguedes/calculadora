import React from 'react';
import { ButtonBase } from './Button.styles';
const Button = ({char}) => {
    return (
        <ButtonBase>
            <ButtonBase.Text>{char}</ButtonBase.Text>
        </ButtonBase>
    );
}

export default Button;
