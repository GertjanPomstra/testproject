numOfClicks = 0;

function Inc () {
    numOfClicks++;
    if (numOfClicks==1){
        document.getElementById("btnClicks").innerText = numOfClicks + " click";
    } else {
        document.getElementById("btnClicks").innerText = numOfClicks + " clicks";
    }
}