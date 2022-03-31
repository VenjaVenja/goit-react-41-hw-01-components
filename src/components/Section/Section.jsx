import PropTypes from 'prop-types';
import { Titel } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <>
            <Titel>{title}</Titel>
            {children}
        </>
    )
};

Section.Prototype = {
    text: PropTypes.string,
    children:PropTypes.node
};