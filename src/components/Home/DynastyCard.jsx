import styled from 'styled-components';
import Card from './Card';
import CardItemHome from './CardItemHome';

function DynastyCard(props) {
  return (
    <CardStyle>
      <Card
        message="Dynasty Tools & Projections"
        items={[
          <CardItemHome text="Managed Lineup Projections" />,
          <CardItemHome text="Sleeper Command Center" />,
          <CardItemHome text="PCW Dynasty Trade Calculator" />,
          <CardItemHome text="Player Exposure Tool" />,
          <CardItemHome text="QB Prospect Model" />,
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

  background-image: linear-gradient(to right bottom, #065a60, #212f45);

  :hover {
    scale: 1.05;
    transition: all 0.1ms;
  }
`;

export default DynastyCard;
