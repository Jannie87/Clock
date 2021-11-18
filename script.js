// Eventlistners/Eventhandler - är bara ett namn på en funktion
// En funktion som anropas av ett event
// window.onload = main;
//JS-doc 0 dokumenterar definitioner
//renderTime är en callback funktion


window.addEventListener('load', main); // kör kod

/**start of the program, runs after pages is loaded */ 
function main(){
    startTime();
}

/** Starts the time on the page */
function startTime(){
    renderTime();
    setInterval(renderTime, 1000);
}

/** Updates the page with current time and weekday*/
function renderTime(){
    const date = new Date();
    const timeElement = document.getElementById('time');
    timeElement.innerText =getCurrentTimeString(date)

    const weekdayElement = document.getElementById('weekday');
    weekdayElement.innerText = getCurrentWeekday(date);

}

/**
 * Takes a date ande return current weekday in swedish.
 * @param {Date} date 
 * @returns {String}
 */
 function getCurrentWeekday(date){
    const weekday = date.getDay();
    switch (weekday) {
        case 0:return 'Söndag';
        case 1:return 'Måndag';
        case 2:return 'Tisdag';
        case 3:return 'Onsdag';
        case 4:return 'Torsdag';
        case 5:return 'Fredag';
        case 6:return 'Lördag';
    }
}

/**
 * Constructs the time string from a date, includes seconds.
 * @param {Date} date 
 * @returns {String} in format HH:MM:SS
 */
function getCurrentTimeString(date) {
    let hours =date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (seconds <10) {seconds ='0'+ seconds;}
    if (hours <10) {hours = '0' + hours;}
    if (minutes <10) {minutes = '0' + minutes;}
    
    return hours + ':' + minutes + ':' + seconds;
}

