import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendListItem from './FriendListItem';


const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`; 

const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </List>
  
)
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
}
export default FriendList;