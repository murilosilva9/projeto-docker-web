	var ficcaoModulo = angular.module('ficcaoModulo',[]);

	ficcaoModulo.controller("ficcaoController", function ($scope) {
	$scope.ficcao = [
		{codigo:1, nome: "Game of Thrones - A Guerra dos Tronos",editora:"Suma"},
		{codigo:2, nome: "Game of Thrones - A Tormenta de Espadas",editora:"Suma"}
					];
    $scope.selecionaFiccao = function(ficcaoSelecionada){
    	$scope.ficcao = ficcaoSelecionada;
    }

    $scope.limpaCampos = function(){
    	$scope.ficcao = "";
    }

	$scope.salvar = function(){
		$scope.ficcao.push($scope.ficcao);
		$scope.limpaCampos;
	}

	$scope.excluir = function()	{			
		$scope.ficcao.splice($scope.ficcao.indexOf($scope.ficcao),1);
		$scope.limpaCampos;
	}
});