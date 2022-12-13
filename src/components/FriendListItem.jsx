import PropTypes from 'prop-types';
import styled from 'styled-components';


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