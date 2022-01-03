numOfClicks = 0;

function Inc (addNum) {
    numOfClicks+=addNum;
    if (numOfClicks==1){
        document.getElementById("lblCount").innerText = numOfClicks + " click";
    } else {
        document.getElementById("lblCount").innerText = numOfClicks + " clicks";
    }
}