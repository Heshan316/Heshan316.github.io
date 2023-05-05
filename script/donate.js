function donateInput(){
    var cardName = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNo").value;
    var donationAmt = document.getElementById("donate-amt").value;
    var cvvNo = document.getElementById("pin").value;
    var month = document.getElementById("ExM").value;
    var year = document.getElementById("ExY").value; 

    var card_pattern = /^[0-9]{16,16}$/; 
    var card_holderName = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/; 
    var pin_pattern = /^[0-9]{3,3}$/; 


    if(cardName.match(card_holderName)){

        alert("Please Enter a Valid Name");
        document.getElementById("name").focus();
        return false;
    }


    if(donationAmt == ""){
        alert("Please Select The Donation Amount");
        return;
    } 

    if(cardNumber.match(card_pattern)){
        alert("Please Enter A Valid Card Number");
        document.getElementById("cardNo").focus();
        return false;
    }

    if(cvvNo.match(pin_pattern)){
        alert("Please Enter A Valid CVV");
        document.getElementById("pin").focus();
    } 


    
    
}






