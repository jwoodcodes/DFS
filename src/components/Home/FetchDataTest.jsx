import styled from 'styled-components';
import axios from 'axios';

function TestDataFetch(props) {
  const getData = () => {
    axios
      .get('https://data.mongodb-api.com/app/data-pqtmg/endpoint/data/v1')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <GetDataButton onClick={getData}>Get Data</GetDataButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  width: 80%;
  height: 20vh;
  border: 2px solid black;
`;

const GetDataButton = styled.button`
  background-color: #065a60;
  color: #fff;

  :hover {
    scale: 1.25;
  }
`;

export default TestDataFetch;
