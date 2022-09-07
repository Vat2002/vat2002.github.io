function showPanel1(){	//different function for each member, displays the correct info
	document.getElementById("aboutPanelTitle").innerHTML = ("Nadun Danushka Kooragamage");
	document.getElementById("aboutPanelID").innerHTML = ("W1837862");
	document.getElementById("aboutPanelPara").innerHTML = ("Student 1");
	document.getElementById("aboutPanel").classList.add("aboutPanelSelected"); //makes panel appear
}
function showPanel2(){	
	document.getElementById("aboutPanelTitle").innerHTML = ("Nammuni Vathila Vilhan De Silva");
	document.getElementById("aboutPanelID").innerHTML = ("W1833511");
	document.getElementById("aboutPanelPara").innerHTML = ("Student 2");
	document.getElementById("aboutPanel").classList.add("aboutPanelSelected");
}
function showPanel3(){	
	document.getElementById("aboutPanelTitle").innerHTML = ("Pallemulla Ralalage Asith Umavin Pallemulla");
	document.getElementById("aboutPanelID").innerHTML = ("W1837925");
	document.getElementById("aboutPanelPara").innerHTML = ("Student 3");
	document.getElementById("aboutPanel").classList.add("aboutPanelSelected");
}
function showPanel4(){	
	document.getElementById("aboutPanelTitle").innerHTML = ("Mohamed Zahir");
	document.getElementById("aboutPanelID").innerHTML = ("W1838914");
	document.getElementById("aboutPanelPara").innerHTML = ("Student 4");
	document.getElementById("aboutPanel").classList.add("aboutPanelSelected");
}
function removePanel(){
	document.getElementById("aboutPanel").classList.remove("aboutPanelSelected"); //makes panel dissappear
}