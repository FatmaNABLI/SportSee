const SERVER = "http://localhost:3000/"

function getUserDataFromAPI(URI){
    /*console.log("salut!")
    const response = await fetch(SERVER + URI);
    const data = await response.json();
    return data*/
    return fetch(SERVER + URI)
            .then(response => response.json())
            .then(response => response.data)
}
function getUserMainDataFromAPI(idUser){
    return getUserDataFromAPI("user/"+ idUser);
}
function getUserActivityFromAPI(idUser){
    return getUserDataFromAPI("user/"+ idUser +"/activity");
}
function getUserPerformanceFromAPI(idUser){
    return getUserDataFromAPI("user/"+ idUser +"/performance");
}
function getUserAverageSessionsFromAPI(idUser){
    return getUserDataFromAPI("user/"+ idUser +"/average-sessions");
}
export {getUserMainDataFromAPI,getUserActivityFromAPI,getUserPerformanceFromAPI,getUserAverageSessionsFromAPI}