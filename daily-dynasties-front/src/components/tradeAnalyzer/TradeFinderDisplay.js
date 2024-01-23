import React from 'react';
import styles from '@/styles/tradeFinder.module.css';

export default function TradeFinderDisplay({ completedTradesToPassToDisplay }) {
  //   console.log(completedTradesToPassToDisplay);

  return (
    <div>
      {completedTradesToPassToDisplay.map(tradeArray => {
        // console.log(tradeArray);
        return tradeArray.map(trade => {
          //   console.log(trade);

          return (
            <div>
              <div key={trade.transactionTime}>
                {trade.leagueName} {trade.dateOfTrade}
              </div>
              <div>{trade.playersInvovled}</div>
            </div>
          );
        });
      })}
    </div>
  );
}
