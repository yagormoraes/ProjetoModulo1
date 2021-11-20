
function personagem1_1() {
	var opcao = (prompt("Digite o número correspondente a opção de seu interesse"))
	if (opcao == 1){
		window.location.href = "personagem1_2.html"
	}else if(opcao == 2){
		window.location.href = "gameOver1_1.html"
	}else{
		alert("Digite somente 1 ou 2!")
	}
	
}

function personagem1_2() {
	var tent = 1
	while(tent<=4){
		var questao = (prompt("Digite sua resposta com o valor exato"))
		if(questao == 3){
			window.location.href = "personagem1_3.html"
			break
		}else if(tent<3){
			alert("Reposta Errada!\nDigite novamente")
		}else{
			window.location.href = "gameOver1_2.html"
			break
		}
		tent++
	}
	
}

function personagem1_3() {
	var opcao = (prompt("Digite o número correspondente a opção de seu interesse"))
	if (opcao == 1){
		window.location.href = "victory1.html"
	}else if(opcao == 2){
		window.location.href = "gameOver1_3.html"
	}else{
		alert("Digite somente 1 ou 2!")
	}
	
}


function personagem2_1() {
	var opcao = (prompt("Digite o número correspondente a opção de seu interesse"))
	if (opcao == 1){
		window.location.href = "personagem2_2.html"
	}else if(opcao == 2){
		window.location.href = "gameOver2_1.html"
	}else{
		alert("Digite somente 1 ou 2!")
	}
	
}

function personagem2_2() {
	var tent = 1
	while(tent<=4){
		var questao = (prompt("Digite sua resposta com o valor exato"))
		if(questao == 3){
			window.location.href = "personagem2_3.html"
			break
		}else if(tent<3){
			alert("Reposta Errada!\nDigite novamente")
		}else{
			window.location.href = "gameOver2_2.html"
			break
		}
		tent++
	}
	
}

function personagem2_3() {
	var opcao = (prompt("Digite o número correspondente a opção de seu interesse"))
	if (opcao == 1){
		window.location.href = "victory2.html"
	}else if(opcao == 2){
		window.location.href = "gameOver2_3.html"
	}else{
		alert("Digite somente 1 ou 2!")
	}
	
}


function personagem3_1() {
	var opcao = (prompt("Digite o número correspondente a opção de seu interesse"))
	if (opcao == 1){
		window.location.href = "personagem3_2.html"
	}else if(opcao == 2){
		window.location.href = "gameOver3_1.html"
	}else{
		alert("Digite somente 1 ou 2!")
	}
	
}

function personagem3_2() {
	var tent = 1
	while(tent<=4){
		var questao = (prompt("Digite sua resposta com o valor exato"))
		if(questao == 3){
			window.location.href = "personagem3_3.html"
			break
		}else if(tent<3){
			alert("Reposta Errada!\nDigite novamente")
		}else{
			window.location.href = "gameOver3_2.html"
			break
		}
		tent++
	}
	
}

function personagem3_3() {
	var opcao = (prompt("Digite o número correspondente a opção de seu interesse"))
	if (opcao == 1){
		window.location.href = "victory3.html"
	}else if(opcao == 2){
		window.location.href = "gameOver3_3.html"
	}else{
		alert("Digite somente 1 ou 2!")
	}
	
}