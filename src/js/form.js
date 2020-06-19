var ath = document.querySelector("#ath"); 

let navn = document.querySelector(".input-navn");
let alder = document.querySelector(".input-alder");
let email1 = document.querySelector(".input-email");
let email2 = document.querySelector(".input-email2");
let mobil = document.querySelector(".input-mobil");
let besked = document.querySelector("textarea");

function validation(m){ 
	if(navn.value ===""){
		ath.textContent = "Angiv et navn!"; 
		navn.focus();
		return false; 
	}

	if(alder.value ===""){
		ath.textContent = "Angiv en alder!"; 
		alder.focus();
		return false; 
	}

	if(isNaN(alder.value)){
		ath.textContent = "Angiv alder med tal!";
		alder.focus();		
		return false; 
	}

	if(alder.value < 18){ 
		ath.textContent = "Du skal være mindst 18 år!"; 
		alder.focus();		
		return false; 
	}


//-------------------------------------------------------EMAIL------------------------------
var at = email1.value.indexOf("@"); 
var dot = email1.value.lastIndexOf("."); 

	if(email1.value ===""){
		ath.textContent = "Angiv en email-adresse!"; 
		email1.focus();
		return false; 
	}
	if(at<= 0){ 
		ath.textContent ="Skal indeholde et @ som ikke må være det første tegn!";
		email1.focus();		
		return false;
	}

	if(dot < at +2){
		ath.textContent ="Tilføj minst et tegn mellem @ og det sidste punktum!";
		email1.focus();		
		return false;		
	}

	if(email1.value.length <= dot+2){
		ath.textContent = "Der skal være mindst 2 tegn efter det sidste punktum!";
		console.log(dot);
		console.log(at);
		return false;
		}

	if(email1.value ==="" || email2.value !== email1.value){ 
		ath.textContent = "Email-adresserne skal være ens!";
		email2.focus();
		return false; 
	}

//---------------------------------------------------mobil----------------------------------
	if(mobil.value ===""){
		ath.textContent = "Angiv et mobil nummer!";
		mobil.focus();
		return false;
	}

	if(isNaN(mobil.value)){
		ath.textContent = "Angiv et gyldigt mobil nummer!";
		mobil.focus();
		return false;
	}

	if(mobil.value.length > 8){
		ath.textContent = "Dit mobilnummer har for mange tal!";
		mobil.focus();
		return false;
	}
	if(mobil.value.length < 8){
		ath.textContent = "Dit mobilnummer mangler nogle tal!";
		mobil.focus();
		return false;
	}
	return true;
}
