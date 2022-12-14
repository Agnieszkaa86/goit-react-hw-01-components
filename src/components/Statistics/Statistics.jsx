
import {Section, Title, List, Item, Label, Percentage} from '../Statistics/Statistics.styled';
import PropTypes from 'prop-types';


const getRandomColor = () =>{
    return (
        '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    )
}
const Statistics = ({ title, stats }) => {
    return (
     <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(item => (
          <Item key={item.id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
    );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
