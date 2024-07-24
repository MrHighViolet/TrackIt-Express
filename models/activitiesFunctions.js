import activities from "../libs/activities.js"; 


export default async function getActivitiesByID(number) { 
    const resultList = [];
    
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].id == number) {
            resultList.push(activities[i]);
        }
    }
    return resultList;
}

console.log(getActivitiesByID(74321234));