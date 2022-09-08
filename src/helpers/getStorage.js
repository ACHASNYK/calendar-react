export const getSesStorage = () => {
    
    let storage = [];
    storage = JSON.parse(sessionStorage.getItem('marked'));
    return storage    
}