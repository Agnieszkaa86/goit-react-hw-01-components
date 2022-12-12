import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 5px 0;
  padding: 15px 25px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 #adacac;
`;
const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  margin: 0 20px;
`;
const Name = styled.p`
  font-weight: bold;
  font-size: 30px;
`;


const FriendList = (props) => {
    const friends = props.friends;
    const view = friends.map(friend => (
        <Item key={friend.id}>
            <Status isOnline={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
        </Item>
    ));
    return <List>{view}</List>
}
FriendList.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default FriendList;