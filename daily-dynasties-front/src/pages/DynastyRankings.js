import MainNav from '@/components/MainNav';
import clientPromise from '@/lib/mongodb';

export default function DynastyRankings(dynastyAndRedraftPlayerObjects) {
  console.log(dynastyAndRedraftPlayerObjects);
  return <MainNav />;
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    const dynastyAndRedraftPlayerObjects = await db
      .collection('dynastyAndRedraftPlayerObjects')
      .find({});
    //   .toArray();
    // console.log(fantasycalcData);
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
