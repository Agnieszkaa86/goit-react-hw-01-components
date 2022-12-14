import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name} from '../FriendListItem/FriendListItem.styled';




const FriendListItem = ({avatar,name,isOnline,id}) => (
         <Item key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
            
        
    )


FriendListItem.propTypes = {
   avatar: PropTypes.string,
   name: PropTypes.string,
   isOnline: PropTypes.bool,
   id: PropTypes.number, 
 }

export default FriendListItem;