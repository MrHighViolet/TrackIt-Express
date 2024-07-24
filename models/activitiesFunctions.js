import activities from "../libs/activities.js"; 


export default async function getActivitiesByID(number) { 
    const resultList = [];
    
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].id == number) {
            resultList.push(activities[i]);
        }
    if (resultList.length > 0) {
      return resultList;
    }
    throw new Error(`No activity with ${number} found.`);
  };
};

// console.log(getActivitiesByID(74321234));