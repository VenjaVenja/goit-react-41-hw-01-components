import { FaEmpire } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Item, Status, Name,  Avatar} from './FriendListItem.styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status>
                <FaEmpire style={{ color: isOnline ? "green" : "red" }}/>
            </Status>
            <Avatar src={avatar} alt="User avatar" width="80" />
            <Name>{name}</Name>
        </Item>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};