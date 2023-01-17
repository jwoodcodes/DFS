import HomeSiteName from './HomeSiteName';
import styled from 'styled-components';

export default function Card(props) {
  return (
    <div className={props.class}>
      <Heading>{props.message}</Heading>
      <ul>{props.items}</ul>
    </div>
  );
}

const Heading = styled.div`
  padding-top: 2rem;
  margin-bottom: 1rem;
`;
