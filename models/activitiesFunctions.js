import activities from "../libs/activities.js"; 


/* This function returns an array of activities linked to a specific User ID */

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

/* This function returns an array containing a single activity linked to a specific Activity ID */

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


/* This function adds a new activity to our database and returns the newly added activity */

export async function addNewActivity(newActivity) {
  activities.push(newActivity);
  return newActivity;
};

/* This function returns an existing activity with its properties updated according to the user's input */

export async function updateActivity(updates) {
  let index = null
  const activityID = 'id' in updates
  if (!activityID){
      throw new Error(`You haven't given us an id.`);
  }
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].id == updates.id) {
         index = i
    }
  }
  if (index === null) {
      throw new Error(`No activity ID with ${updates.id} found.`);
    }
  
  const activityType = 'activity_type' in updates
  if (activityType) {
    activities[index].activity_type = updates.activity_type
  }
  const activityDuration = 'activity_duration' in updates
  if (activityDuration) {
    activities[index].activity_duration = updates.activity_duration
  }
  activities[index].activity_submitted = Date.now()

  return activities[index]
};

