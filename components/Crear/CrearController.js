
contactApp.controller('CrearController', ['$scope', function($scope) {
    console.log("estamos en crear!");
    // Direccionamiento de usuario

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            $scope.user = user.email;
        }else{
            window.location = "../Login/Login.html"
        }
    });

    // Función de crear

    $scope.crear = function(){
        
        var nombreReceta = $scope.nombreRecetaInput;
        var recetaPara = $scope.recetaParaInput;
        var ingredientes = $scope.ingredientesInput;
        var procedimiento = $scope.procedimientoInput;
        var email = $scope.emailInput;
        var nombre = $scope.nombreInput;

        if(nombre && nombreReceta && recetaPara && ingredientes && procedimiento && email){
            db.collection("recetas").doc(email).set({
                nombre: nombre,
                nombreReceta: nombreReceta,
                recetaPara: recetaPara,
                ingredientes: ingredientes,
                procedimiento: procedimiento,
                correo: email
            })
            .then(function(docRef){
                swal("Bien!","Receta creada!","success");
                $scope.nombreRecetaInput = undefined;
                $scope.recetaParaInput = undefined;
                $scope.ingredientesInput = undefined;
                $scope.procedimientoInput = undefined;
                $scope.emailInput = undefined;
                $scope.nombreInput = undefined;
                $scope.$apply();
            })
            .catch(function(error){
                console.error(error);
                swal("Error","Problemas en base de datos!","error");
            });


        }else{
            swal("Atención","Faltan diligenciar algunos campos o el correo esta mal escrito","warning");
        }    

    }  

}]);