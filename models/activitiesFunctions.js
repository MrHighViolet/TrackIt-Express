import activities from "../libs/activities.js"; 

export default async function getActivitiesByID(number) { 
    const resultList = [];
    
    for (let i = 0; i < activities.length; i++) {
      
      
        if (activities[i].id == number) {
            resultList.push(activities[i]);
        }
      }
        console.log(resultList)
    if (resultList.length === 0) {
      throw new Error(`No activity with ${number} found.`);
    }
    
  
  return resultList;
};

// console.log(getActivitiesByID(74321234));