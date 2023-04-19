export default function PcwTrade(fantasycalcData) {
  //   console.log({ fantasycalcData });
  return (
    <div>
      <div>pcw calculator</div>
    </div>
  );
}

// export async function getStaticProps() {
//   try {
//     const client = await clientPromise;
//     const db = client.db('dailydynasties');

//     const fantasycalcData = await db
//       .collection('fantasycalcData')
//       .find({})
//       .toArray();

//     return {
//         props: { fantasycalcData: JSON.parse(JSON.stringify(fantasycalcData)) },

//     };
//   } catch (e) {
//     console.error(e);
//   }
// }
