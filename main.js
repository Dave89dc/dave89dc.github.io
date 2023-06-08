/* ETA --------------------------------------------------------- */

function displayYears(){
    const etàList = document.getElementById('età');
    const text = document.createTextNode(`Età: ${getYears()}`);
    etàList.appendChild(text);
}

function getYears(){
    const date = new Date();
    const milliSec = date.getTime();
    const myDate = new Date('1989-09-29')
    const myMillSec = myDate.getTime();
    const difference = milliSec - myMillSec;
    const anni = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    return anni;
}

displayYears();


/* CAROSELLO -------------------------------------------------- */

