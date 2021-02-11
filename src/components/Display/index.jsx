import { DisplayBase } from './Display.styles';

const Display = ({exp}) => {
    return (
        <DisplayBase>
            <DisplayBase.Result>{exp}</DisplayBase.Result>
        </DisplayBase>
    );
}

export default Display;
