import HomeSiteName from './HomeSiteName';
import CardItemHome from './CardItemHome';
import styled from 'styled-components';

export default function Card({ message, items }) {
  return (
    <div>
      <Heading>{message}</Heading>
      <ul>{items}</ul>
    </div>
  );
}

const Heading = styled.div`
  padding-top: 2rem;
  margin-bottom: 1rem;
  font-size: 3.25rem;
`;
