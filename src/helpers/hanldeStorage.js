 const getSesStorage = () => {
    
    ;
   let storage = JSON.parse(sessionStorage.getItem('date'))||undefined;
    return storage;  
};

const setSesStorage = (item) => {
    sessionStorage.setItem('date', JSON.stringify(item));

}

const getLocalStorage = () => {
    let storage = JSON.parse(localStorage.getItem('task'))||undefined;
    return storage;
}

const setLocalStorage = (item) => {
    let created = {...item, created: new Date().toUTCString()}
    let data = JSON.parse(localStorage.getItem('task'))||[];
    
    data.push(created);
    
    localStorage.setItem('task', JSON.stringify(data));
}

const deleteFromLocalStorage = (id, input) => {
    let data = getLocalStorage();
    data = data.filter(obj => {return obj.date!==id&&obj.title!==input.title})
    localStorage.setItem('task', JSON.stringify(data))
}

const updateLocalStorage = (id, input) =>{
    let created = {...input, updated: new Date().toUTCString() }
    let data = getLocalStorage();
    data = data.filter(obj => {return obj.date!==id&&obj.created!==input.created})
    data.push(created)
    localStorage.setItem('task', JSON.stringify(data));
}

export {getSesStorage, 
    setSesStorage, 
    getLocalStorage, 
    setLocalStorage,
deleteFromLocalStorage,
updateLocalStorage}