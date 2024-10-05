const teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer = require('../datafilesmadefrom4for4CSVs/teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer');

 










let teamDefStatsSortedForExplosiveRushRateRank = teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function(a, b) {
    // console.log(a['"Explosive Rush %"'])
    if (+a['"Explosive Rush %"'] < +b['"Explosive Rush %"']) {
        return 1;
    }
    if (+a['"Explosive Rush %"'] > +b['"Explosive Rush %"']) {
        return -1;
    }
    return 0;
})

// console.log(teamDefStatsSortedForExplosiveRushRateRank)

// module.exports = {
//     teamDefStatsSortedForPointsAllowedRank,
//     teamDefStatsSortedForEPAPerPlayRank,
//     teamDefStatsSortedForRushEPAPerPlayRank,
//     teamDefStatsSortedForPlaySuccessRateRank,
//     teamDefStatsSortedForExplosivePassRateRank,
//     teamDefStatsSortedForExplosiveRushRateRank
// }

module.exports = teamDefStatsSortedForPointsAllowedRank
module.exports = teamDefStatsSortedForEPAPerPlayRank
module.exports = teamDefStatsSortedForRushEPAPerPlayRank
module.exports = teamDefStatsSortedForPlaySuccessRateRank
module.exports = teamDefStatsSortedForExplosivePassRateRank
module.exports = teamDefStatsSortedForExplosiveRushRateRank