// variable used to store html elememts
const SlAdult = document.getElementById("slAd");
const SlChild = document.getElementById("slCh");
const FoAdult = document.getElementById("foA");
const FoChild = document.getElementById("foC");
const inFant = document.getElementById("inF");
const dURation = document.getElementById("duration");
const gender = document.getElementById("genderL");
const date = document.getElementById("datE");
const mobNo = document.getElementById("mobN");
const fNmae = document.getElementById("fNme");
const conEmail = document.getElementById("conEmail");
const email = document.getElementById("eMail");
const addFav = document.getElementById("addTofav");
const ordFav = document.getElementById("ordTofav");
const favOk = document.getElementById("okFav");
const placeOrderbtn = document.getElementById("p-order");
const loyalBtn = document.getElementById("c-loyalty");
const btninc1 = document.getElementById("increment1");
const btndec1 = document.getElementById("decrement1");
const btninc2 = document.getElementById("increment2");
const btndec2 = document.getElementById("decrement2");
const btninc3 = document.getElementById("increment3");
const btndec3 = document.getElementById("decrement3");
const btninc4 = document.getElementById("increment4");
const btndec4 = document.getElementById("decrement4");
const btninc5 = document.getElementById("increment5");
const btndec5 = document.getElementById("decrement5");
const Addbutton = document.getElementById("add-btn");
const txtCost = document.getElementById("costval")
const ovrAllOrder = document.getElementById("overAllOrder");
const TC = document.getElementById("totalCost");
const loyaltytxt = document.getElementById("loyalTxt");




//global variable
let durationValue;
let durationPrice;
let currentCost = 0;
let value;
let newValue;
let totalCost;
let sumCurrent;
let duRationCost = 0;
let fulCost = 0;
let overAllCost = 0;
let totalSLA=0;
let totalSLC=0;
let totalFOA=0;
let totalFOC=0;
let totalINF=0;
let totalex=0;






//increment and decrement
btninc1.addEventListener("click", slAD);
function slAD() {
    let value = SlAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    SlAdult.setAttribute("value", a);
    currentCost += 1200;
    txtCost.innerText = `LKR.${currentCost}`;
    
}

btndec1.addEventListener("click", slAd);
function slAd() {
    let value = SlAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if (a >= 0) SlAdult.setAttribute("value", a);
    currentCost -= 1200;
    txtCost.innerText = `LKR.${currentCost}`;

}
btninc2.addEventListener("click", slCH);
function slCH() {
    let value = SlChild.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    SlChild.setAttribute("value", a);
    currentCost += 700;
    txtCost.innerText = `LKR.${currentCost}`;
}
btndec2.addEventListener("click", sLCh);
function sLCh() {
    let value = SlChild.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if (a >= 0) SlChild.setAttribute("value", a);
    currentCost -= 700;
    txtCost.innerText = `LKR.${currentCost}`;
}
btninc3.addEventListener("click", foA)
function foA() {
    let value = FoAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    FoAdult.setAttribute("value", a);
    currentCost += 5500;
    txtCost.innerText = `LKR.${currentCost}`;
}
btndec3.addEventListener("click", fOA);
function fOA() {
    let value = FoAdult.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if (a >= 0) FoAdult.setAttribute("value", a);
    currentCost -= 5500;
    txtCost.innerText = `LKR.${currentCost}`;
}
btninc4.addEventListener("click", foC);
function foC() {
    let value = FoChild.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    FoChild.setAttribute("value", a);
    currentCost += 2700;
    txtCost.innerText = `LKR.${currentCost}`;
}
btndec4.addEventListener("click", fOC);
function fOC() {
    let value = FoChild.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if (a >= 0) FoChild.setAttribute("value", a);
    currentCost -= 2700;
    txtCost.innerText = `LKR.${currentCost}`;
}
btninc5.addEventListener("click", inF);
function inF() {
    let value = inFant.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue + 1;
    inFant.setAttribute("value", a);
    currentCost += 0;
    txtCost.innerText = `LKR.${currentCost}`;
}
btndec5.addEventListener("click", iNF);
function iNF() {
    let value = inFant.getAttribute("value");
    let newValue = parseInt(value);
    let a = newValue - 1;
    if (a >= 0) inFant.setAttribute("value", a);
    currentCost -= 0;
    txtCost.innerText = `LKR.${currentCost}`;
    

}

//duration

dURation.addEventListener("change", duraTIOn);
function duraTIOn() {
    let a = dURation.value;
    let SlaVa = parseInt(SlAdult.value);
    let SlcVa = parseInt(SlChild.value);
    let FoaV = parseInt(FoAdult.value);
    let FocV = parseInt(FoChild.value);
    if (a == "Half Day") {
        duRationCost = (SlaVa*350) + (SlcVa*350) + (FoaV*450) + (FocV*450);
        fulCost = currentCost + duRationCost;
        txtCost.innerText=`LKR. ${fulCost}`;

    } else if (a == "Full Day") {
        duRationCost = (SlaVa*600) + (SlcVa*600) + (FoaV*800) + (FocV*800);
        fulCost = currentCost + duRationCost;
        txtCost.innerText=`LKR. ${fulCost}`;
    }else txtCost.innerText=`LKR. ${currentCost}`;
}

Addbutton.addEventListener("click",btnadd);
function btnadd(){
    let FuNmae = fNmae.value;
    let SlaVa = parseInt(SlAdult.value);
    let SlcVa = parseInt(SlChild.value);
    let FoaV = parseInt(FoAdult.value);
    let FocV = parseInt(FoChild.value);
    let inF = parseInt(inFant.value);
    let totalP = parseInt(SlaVa+SlcVa+FoaV+FocV+inF);
    let EmAil = email.value;
    let mob = mobNo.value;
    let tOtAl = txtCost.innerText;
    let ArrDte = date.value;
    overAllCost += (currentCost + duRationCost);
    totalSLA += SlaVa;
    totalSLC += SlcVa;
    totalFOA += FoaV;
    totalFOC += FocV;
    totalINF += inF;
    totalex += totalP
    

    ovrAllOrder.innerHTML = `
    <div id="orderDes">
    <p>
    Booking Name: ${FuNmae}<br>
    No of People: ${totalex}<br>
    SL Adult: ${totalSLA}<br>
    SL Child: ${totalSLC}<br>
    FO Adult: ${totalFOA}<br>
    FO Child: ${totalFOC}<br>
    Infants: ${totalINF}<br>
    Total: ${tOtAl}<br>
    Arrival Date: ${ArrDte}<br>
    Email: ${EmAil}<br>
    Mobile No: ${mob}<br>
    </p>
    </div>
    `
    TC.innerText = `LKR. ${overAllCost}`;
    resetB();


}
function resetB(){
    SlAdult.setAttribute("value",0);
    SlChild.setAttribute("value",0);
    FoChild.setAttribute("value",0);
    FoAdult.setAttribute("value",0);
    inFant.setAttribute("value",0);
    txtCost.innerText= "LKR. 0";
    currentCost=0;
    duRationCost=0;
    fulCost=0;
}
addFav.addEventListener("click", favBtn);
function favBtn(){
    delt();
    let SLa = SlAdult.getAttribute("value");
    let Slc = SlChild.getAttribute("value");
    let Fa = FoAdult.getAttribute("value");
    let Fc = FoChild.getAttribute("value");
    let In = inFant.getAttribute("value");

    localStorage.setItem("SL Adult", SLa)
    localStorage.setItem("SL Child", Slc)
    localStorage.setItem("Foreign Adult", Fa)
    localStorage.setItem("Foreign Child", Fc)
    localStorage.setItem("Infant", In)
}
function delt(){
    localStorage.clear
}

ordFav.addEventListener("click", FavoRd);
function FavoRd(){
    let SLa = localStorage.getItem("SL Adult");
    let Slc = localStorage.getItem("SL Child");
    let Fa = localStorage.getItem("Foreign Adult");
    let Fc = localStorage.getItem("Foreign Child");
    let In = localStorage.getItem("Infant");
    let AsL = parseInt(SLa);
    let CsL = parseInt(Slc);
    let Af = parseInt(Fa);
    let Cf = parseInt(Fc);
    let Ni = parseInt(In);

    currentCost = (AsL*1200)+(CsL*700)+(Af*5500)+(Cf*2700)+(Ni*0);

    SlAdult.setAttribute("value", SLa);
    SlChild.setAttribute("value", Slc);
    FoAdult.setAttribute("value", Fa);
    FoChild.setAttribute("value", Fc);
    inFant.setAttribute("value", In);
    txtCost.innerText = `LKR.  ${currentCost}`
}



placeOrderbtn.addEventListener("click",pOrderbtn);
function pOrderbtn(){
    alert("Thank You For Purchasing!");
    fNmae.value="";
    date.value="";
    mobNo.value="";
    email.value="";
    conEmail.value="";
    SlAdult.value=0;
    SlChild.value=0;
    FoAdult.value=0;
    FoChild.value=0;
    inFant.value=0;
    mobNo.value=0;
    currentCost=0;
    fulCost=0;
    duRationCost=0;
    txtCost.innerText="0.00";
    ovrAllOrder.innerText="";
    txtCost.innerText="0.00";
}

loyalBtn.addEventListener("click", LoylBtn);
function LoylBtn(){
    if(totalex > 3){
        let loyalpoints = totalex*15
        loyaltytxt.innerText = `Loyalty Earned: ${loyalpoints} points`
    }else loyaltytxt.innerText = `Loyalty Earned: 0 points`
}








