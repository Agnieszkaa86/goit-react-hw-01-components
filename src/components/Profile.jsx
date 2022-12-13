
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
  background-color: #fff;
  margin: 20px auto;
  width: 300px;
  justify-content: center;
  border-radius: 7px;
  box-shadow: 0 0 6px 0 #adacac;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;np
  padding: 34px 8px;
`;
const Avatar = styled.img`
  border-radius: 100%;
  width: 120px;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  margin-top: 24px;
`;
const Tag = styled.p`
  color: #888888;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;
const Location = styled.p`
  color: #888888;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;
const List = styled.ul`
  border-top: 1px solid #e4e9f0;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: rgb(226, 226, 226);
  flex-basis: calc(100% / 3);
  padding: 20px 5px;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid #a2b9bc;
  }
`;
const Label = styled.span`
  color: #768696;
  display: block;
  font-size: 14px;
  padding-bottom: 2px;
`;
const Quantity = styled.span`
  font-weight: bold;
  font-size: 17px;
`;

const Profile = ({ username, tag, location, avatar, stats })=> {
    return(
<Container>
        <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
        </Description>

        <List>
        <Item>
      <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
        </Item> 
    <Item>
      <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
    </Item>
  </List>
</Container>
);
};
Profile.propTypes = {
  tag: PropTypes.string,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
