document.getElementById("generateBtn").addEventListener('click', function() {

    let batchValue = document.getElementById("batchInput").value;

    if (batchValue>0){
        if(batchValue>44 && batchValue<50) {
            getRandom(batchValue);
        }
        else {
            alert("Input the batch number between 45 to 49 bro!");
        }
    }
    else {
        alert("Input the batch number bro!");
    }
})

const getRandom = batchId => {
    let random = 1000*Math.random();
    batchId = batchId + '';
    random = (random +'').split('.')[0];
    if (random.length===3) {
        let memberId = '21'+random+batchId;
        document.getElementById("idNumber").innerText = memberId;
    }
}