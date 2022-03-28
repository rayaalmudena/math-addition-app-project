newNumbers();

function newNumbers() {
    let num1= parseInt(Math.random()*10);
    let num2= parseInt(Math.random()*10); 
    // with librery https://chancejs.com/ generate random numbers
    //let otherWayOfRandom = chance.intefer({ min: 0, max: 10 })

    $("#primary-number").text(num1),
    $("#secondary-number").text(num2);
}

$("#btn").click(function () {
    let guess=+$("#guess").val();
    let goodResult=(+$("#primary-number").text())+(+$("#secondary-number").text());
    
    if (guess==goodResult) {
        alert("Correct!");
    } else {
        alert("Incorrect! The right answer is "+goodResult+"!");
    }
    newNumbers();
})
