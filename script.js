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

/** Updates the page with current time */
function renderTime(){
    const h2 = document.getElementById('time');
    const date = new Date();
    h2.innerText = getCurrentTimeString(date);
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

