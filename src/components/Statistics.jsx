
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  background-color: #fff;
  margin: 20px auto;
  padding: 40px 0px 0px;
  width: 350px;
  justify-content: center;
  border-radius: 7px;
  box-shadow: 0 0 6px 0 #adacac;
`;
const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  text-align: center;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 70px;
  background-color: rgb(17, 64, 219);
`;
const Label = styled.span`
  display: block;
  font-size: 15px;
  text-align: center;
`;
const Percentage = styled.span`
  display: block;
  font-size: 15px;
  text-align: center;
`;
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
