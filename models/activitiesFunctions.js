import activities from "../libs/activities.js"; 

export async function getActivitiesByID(number) { 
    const resultList = [];
    
    for (let i = 0; i < activities.length; i++) {
      
      
        if (activities[i].id == number) {
            resultList.push(activities[i]);
        }
      }
        
    if (resultList.length === 0) {
      throw new Error(`No activity with ${number} found.`);
    }
  return resultList;
};

export async function addNewActivity(newActivity) {
  activities.push(newActivity);
  return newActivity;
};

// console.log(getActivitiesByID(74321234));