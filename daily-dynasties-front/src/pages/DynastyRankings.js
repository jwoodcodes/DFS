import MainNav from '@/components/MainNav';
import styles from '@/styles/dynastyRankings.module.css';
import clientPromise from '@/lib/mongodb';

export default function DynastyRankings(dynastyAndRedraftPlayerObjects) {
  console.log(dynastyAndRedraftPlayerObjects);
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

    const dynastyAndRedraftPlayerObjects = await db
      .collection('dynastyAndRedraftPlayerObjects')
      .find({})
      .toArray();
    // console.log(dynastyAndRedraftPlayerObjects);
    return {
      props: {
        dynastyAndRedraftPlayerObjects: JSON.parse(
          JSON.stringify(dynastyAndRedraftPlayerObjects)
        ),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
