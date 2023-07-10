import MainNav from '@/components/MainNav';
import styles from '@/styles/dynastyRankings.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/sortableTable/Table';

export default function DynastyRankings(dynastyRankingsData) {
  let dataLevelOne = dynastyRankingsData.dynastyRankingsData;
  //   console.log(dataLevelOne);
  let dataLevelTwo;
  dataLevelOne.map(function (data) {
    // console.log(data);
    dataLevelTwo = data;
  });
  //   console.log(dataLevelTwo.dynastyRankingsDataObjectsArray);
  const dataArray = dataLevelTwo.dynastyRankingsDataObjectsArray;
  //   console.log(dataArray);

  return (
    <div>
      <MainNav />
      <div className={styles.pageTitle}>Dynasty Rankings</div>
      <div className={styles.lastUpdated}>Last updated: 7/10/23</div>
      <Table data={dataArray} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    const dynastyRankingsData = await db
      .collection('dynastyRankingsData')
      .find({})
      .toArray();
    // console.log(dynastyAndRedraftPlayerObjects);
    return {
      props: {
        dynastyRankingsData: JSON.parse(JSON.stringify(dynastyRankingsData)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
