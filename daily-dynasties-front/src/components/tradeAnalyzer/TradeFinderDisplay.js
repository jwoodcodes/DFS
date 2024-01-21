import React from "react";
import styles from '@/styles/tradeFinder.module.css';

export default function TradeFinderDisplay({ completedTradesToPassToDisplay }) {

    // console.log(completedTradesToPassToDisplay)

   
    completedTradesToPassToDisplay.map((tradeArray) => {
        // console.log(tradeArray)
        tradeArray.map((trade) => {
            // console.log(trade)
            for (const [key, value] of Object.entries(trade)) {
                // console.log(`${key}: ${value}`);
                
                
              }
        })

        

    })

    

    return (
        <div>
            
        </div>
    )

}