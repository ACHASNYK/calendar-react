// Add new task
const AddTask =(data) => {
    fetch("https://coolhost.com/calendar",{
       "method" : "POST",
       "headers": {
        "host": "coolhost.com",
        "key" : "apikey",
        "content-type": "application/json",
        "accept": "application/json"
       },
       "body": JSON.stringify({data}) 
    })
    .then(response => response.json())
    .then(response => {console.log(response)

    })
    .catch(err => {console.log(err)});
}

// Get all saved tasks
const GetList = (setData) => {
    fetch("https://coolhost.com/calendar",{
       "method" : "GET",
       "headers": {
        "host": "coolhost.com",
        "key" : "apikey",
       },
    })
    .then(response => response.json())
    .then(response => {setData(response)})
    .catch(err => {console.log(err)});
};

// Update task
const UpdateTask = (id, data) => {
    fetch("https://coolhost.com/calendar",{
        "method" : "POST",
        "headers": {
         "host": "coolhost.com",
         "key" : "apikey",
         "content-type": "application/json",
         "accept": "application/json"
        },

        "body": JSON.stringify({
            id: id,
            title: data.title,
            description: data.description,
            time: data.time,
            date: data.date,
            updated: data.updated
        })
    })
    .then(response => response.json())
    .then(response => {console.log(response)}).catch(err => {console.log(err)})
}

// Delete task
const DeleteTask =(id) => {
fetch(`https://coolhost.com/calendar/_id/${id}`, {
  "method": "DELETE",
  "headers": {
    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    "x-rapidapi-key": "apikey"
  }
})
.then(response => response.json())
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});
}

export {AddTask, GetList, UpdateTask, DeleteTask  }

