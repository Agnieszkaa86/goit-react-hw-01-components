
import {Description,Avatar,Name,Tag,Location,List,Item,Container,Label,Quantity} from '../Profile/Profile.styled';
import PropTypes from 'prop-types';




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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
