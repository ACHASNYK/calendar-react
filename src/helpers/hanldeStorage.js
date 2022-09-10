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
    localStorage.setItem('task', JSON.stringify(item));
}

export {getSesStorage, setSesStorage, getLocalStorage, setLocalStorage}