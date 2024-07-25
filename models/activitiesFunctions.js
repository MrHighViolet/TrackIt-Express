import activities from "../libs/activities.js"; 

export async function getActivitiesByUserID(number) { 
    const resultList = [];
    
    for (let i = 0; i < activities.length; i++) {
      
      
        if (activities[i].user_id == number) {
            resultList.push(activities[i]);
        }
      }
        
    if (resultList.length === 0) {
      throw new Error(`No activity with User ID ${number} found.`);
    }
  return resultList;
};

export async function getActivitiesByActivityID(number) { 
  const resultList = [];
  
  for (let i = 0; i < activities.length; i++) {
    
    
      if (activities[i].id == number) {
          resultList.push(activities[i]);
      }
    }
      
  if (resultList.length === 0) {
    throw new Error(`No activity with Activity ID ${number} found.`);
  }
return resultList;
};


export async function addNewActivity(newActivity) {
  activities.push(newActivity);
  return newActivity;
};

export async function updateActivity(updates) {
  // update activity
}

// console.log(getActivitiesByID(74321234));