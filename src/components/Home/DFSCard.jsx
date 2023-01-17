import styled from 'styled-components';
import Card from './Card';
import CardItemHome from './CardItemHome';

function DFSCard(props) {
  return (
    <CardStyle>
      <Card
        message="DFS Tools & Projections"
        items={[
          <CardItemHome text="Projections By Position" />,
          <CardItemHome text="Stacking Projections" />,
          <CardItemHome text="Team & Game Environment Breakdowns" />,
          <CardItemHome text="Ownership Projections" />,
          <CardItemHome text="Lineup Builder" />,
        ]}
      />
    </CardStyle>
  );
}

const CardStyle = styled.div`
  margin-bottom: 3rem;
  color: #f4f1de;
  font-size: 3rem;
  text-align: center;

  box-shadow: 0 1.5rem 4rem rgba(#000, 0.35);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-image: linear-gradient(to right bottom, #212f45, #3e1f47);

  :hover {
    scale: 1.05;
    transition: all 0.1ms;
  }
`;
export default DFSCard;
