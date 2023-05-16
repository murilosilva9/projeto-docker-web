	var fornecedorModulo = angular.module('fornecedorModulo',[]);

	fornecedorModulo.controller("fornecedorController", function ($scope) {
	$scope.fornecedor = [
		{codigo:1, nome: "FORNECEDOR 1",preco:"20,00", livro:{codigo:1, nome: "Game of Thrones - A Guerra dos Tronos",editora:"Suma"}},
		{codigo:2, nome: "FORNECEDOR 2",preco:"30,00", livro:{codigo:2, nome: "Game of Thrones - A Tormenta de Espadas",editora:"Suma"}}
					];
	$scope.ficcao = [
		{codigo:1, nome: "Game of Thrones - A Guerra dos Tronos",editora:"Suma"},
		{codigo:2, nome: "Game of Thrones - A Tormenta de Espadas",editora:"Suma"}
					];				
    $scope.selecionafornecedor = function(fornecedorSelecionada){
    	$scope.fornecedor = fornecedorSelecionada;
    }

    $scope.limpaCampos = function(){
    	$scope.fornecedor = "";
    }

	$scope.salvar = function(){
		$scope.fornecedor.push($scope.fornecedor);
		$scope.limpaCampos;
	}

	$scope.excluir = function()	{			
		$scope.fornecedor.splice($scope.fornecedor.indexOf($scope.fornecedor),1);
		$scope.limpaCampos;
	}
});