var etanol,gasolina

function calcular() {
	etanol = parseFloat(totalFlex.txtEtanol.value.replace(",","."))
	gasolina = parseFloat(totalFlex.txtGasolina.value.replace(",","."))
	if(etanol < 0.7 * gasolina){
		document.getElementById("status").src="etanol.png"
	}else{
	document.getElementById("status").src="gasolina.png"
	}
}

function resetar() {
	document.getElementById("status").src="neutro.png"
}