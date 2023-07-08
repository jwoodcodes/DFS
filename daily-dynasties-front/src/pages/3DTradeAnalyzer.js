import MainNav from '@/components/MainNav';
import styles from '@/styles/tradeAnalyzer.module.css';
import clientPromise from '@/lib/mongodb';

export default function ThreeDTradeAnalyzer(dynastyRankingsData) {
  let dataLevelOne = dynastyRankingsData.dynastyRankingsData;
  // console.log(dataLevelOne);
  let dataLevelTwo;
  dataLevelOne.map(function (data) {
    // console.log(data);
    dataLevelTwo = data;
  });
  // console.log(dataLevelTwo);
  // console.log(dataLevelTwo.tradeAnalyzerDataObjectsArray);
  const dataArray = dataLevelTwo.tradeAnalyzerDataObjectsArray;
  console.log(dataArray);

  return (
    <div>
      <MainNav />
      <div className={styles.pageTitle}>3D Trade Analyzer</div>
      {/* {dataArray.map(function (player, index) {
        return (
          <li key={index}>
            {player.name} {player.age}
          </li>
        );
      })} */}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    const dynastyRankingsData = await db
      .collection('tradeAnalyzerData')
      .find({})
      .toArray();
    // console.log(dynastyRankingsData);
    return {
      props: {
        dynastyRankingsData: JSON.parse(JSON.stringify(dynastyRankingsData)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
