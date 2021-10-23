contactApp.controller('ListaContactosController', ['$scope', function($scope) {
    console.log("estamos en lista de contactos!");

    // Direccionamiento de usuario

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            $scope.user = user.email;
        }else{
            window.location = "../Login/Login.html"
        }
    });

    //Código para traer información desde Firebase

    db.collection("recetas").get()
    .then(function(querySnapshot){
        var recetas = [];
        querySnapshot.forEach(function(doc){
            //console.log(doc.id, "=>", doc.data());
            recetas.push(doc.data());
        });
        $scope.recetas = recetas;
        $scope.$apply();
    });

    // Crear una función para eliminar un contacto

    $scope.eliminar = function(correo){

        swal({
            title: "Está seguro?",
            text: "Una vez eliminado, no lo prodrás recuperar!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                db.collection("recetas").doc(correo).delete()
                .then(function(){
                    swal("Receta eliminada","","success");
                    location.reload();
                })
                .catch(function(error){
                    console.error(error);
                })
            } else {
              
            }
        });        
    }

    // Cerrar sesion usuario

    $scope.salir = function(){
        swal({
            title: "Cerrar sesión",
            text: "¿Está seguro de salir?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willLogout) => {
            if (willLogout) {
                firebase.auth().signOut()
                .then(function(){})
                .catch(function(error){
                    console.log(error);
                })    
            } else {
              
            }
        });
    }

}]);