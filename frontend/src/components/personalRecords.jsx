import React from "react";
import './personalRecords.css';

const PersonalRecords = ({ entryList }) => {

    const findRecords = (entryList) => {
        if (entryList.length === 0) return ["n/a", "n/a", "n/a", "n/a"];
        let fastestPace = Infinity;
        let fastestPaceString = "";
        let mostMiles = 0;
        let lastDate = new Date(entryList[0].date);
        let longestStreak = 1;
        let curStreak = 1;
        let mostTime = 0;
        let mostTimeString = "";
        entryList.map((entry) => {
            mostMiles = Math.max(mostMiles, entry.miles);
            
            let curTime = entry.avgPace.split(":");
            let curTotalTime = 0;

            let curPace = 0;

            for (let i = 0; i < 3; i++){
                curTime[i] = parseInt(curTime[i]);
                curPace += curTime[i];
                curTime[i] *= entry.miles;
                curTotalTime += (i == 0 ? curTime[i] * 360 : (i == 1 ? curTime[i] * 60 : curTime[i]));
            }
            if (curPace < fastestPace){
                fastestPace = curPace;
                fastestPaceString = entry.avgPace;
            }
            if (curTotalTime > mostTime){
                mostTime = curTotalTime;
                mostTimeString = "";
                let hours = Math.floor(curTotalTime / 360);
                curTotalTime %= 360;
                mostTimeString += (hours + ":");
                let minutes = Math.floor(curTotalTime / 60);
                curTotalTime %= 60;
                mostTimeString += (minutes + ":");
                mostTimeString += Math.floor(curTotalTime);
            }
            const curDate = new Date(entry.date);
            console.log("curDate:" + curDate)
            console.log("before" + lastDate);
            lastDate.setDate(lastDate.getDate() - 1);
            console.log("after" + lastDate);
            console.log("2nd curDate:" + curDate)
            if (curDate == lastDate){
                curStreak++;
                longestStreak = Math.max(longestStreak, curStreak);
            }
            else{
                curStreak = 1;
            }
            lastDate = curDate;
        });

        return [fastestPaceString, mostMiles, mostTimeString, longestStreak];
    }

    const Records = () => {
        let curRecord = findRecords(entryList);
        return (
            <div className="RecordWrapper">
                <div className="Pace">
                    {curRecord[0]} Pace
                </div>
                <div className="Miles">
                    {curRecord[1]} Miles
                </div>
                <div className="Hours">
                    {curRecord[2]} Hours
                </div>
                <div className="Days">
                    {curRecord[3]} Day(s)
                </div>
            </div>
        );
    };

    

    return (
        <div>
            {Records()}
        </div>
    );
};

export default PersonalRecords;
