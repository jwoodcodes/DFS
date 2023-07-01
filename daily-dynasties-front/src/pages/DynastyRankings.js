import MainNav from '@/components/MainNav';
import styles from '@/styles/dynastyRankings.module.css';
import clientPromise from '@/lib/mongodb';

export default function DynastyRankings(dynastyRankingsData) {
  console.log(dynastyRankingsData);
  return (
    <div>
      <MainNav />
      <div className={styles.pageTitle}>Dynasty Rankings</div>
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
