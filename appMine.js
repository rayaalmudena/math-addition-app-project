newNumbers();

function newNumbers() {
    let num1= parseInt(Math.random()*10);
    let num2= parseInt(Math.random()*10);        

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