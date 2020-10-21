var bLogeo = document.getElementById('signin');
//bLogeo.innerHTML='hola';
bLogeo.addEventListener('click',function(){
    //alert('evento boton: '+ document.getElementById('password').value)
    var e=document.getElementById('email').value;
    var p=document.getElementById('password').value;
    const parametros=new URLSearchParams();
    parametros.append('PrmEmail', e);
    parametros.append('PrmPassword', p);
    //alert(parametros);

   /* axios.get('http://localhost:2020/hola?'+parametros)
    .then(function(response){
        console.log(response)
        console.log(response.data)
        console.log('contenido: '+response.data)
        console.log('Estatus: '+response.status)
        document.getElementById('titulo').innerHTML=response.data;
    })
    .cath(function(error) {
        console.log(error())
    })*/

    /*
    axios.post('http://localhost:2020/adios?'+parametros)
        .then(function (response) {
            console.log(response)
            console.log('contenido: ' + response.data)
            console.log('estatus: ' + response.status)
            document.getElementById('titulo').innerHTML = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
        */

        //Se hace la peticion post
    //    axios.post('http://localhost:2020/adios',{
    //         PrmEmail:e,
    //         PrmPassword:p
    //    })
    //    .then(function (response) {
    //        console.log(response)
    //        console.log('contenido: ' + response.data)
    //        console.log('estatus: ' + response.status)
    //        document.getElementById('titulo').innerHTML = response.data
    //    })
    //    .catch(function (error) {
    //        console.log(error)
    //    })

    // axios.post('http://localhost:2020/adiosJson',parametros)
    //    .then(function (response) {
    //        console.log(response)
    //        console.log('contenido: ' + response.data)
    //        console.log('estatus: ' + response.status)
    //        document.getElementById('titulo').innerHTML = response.data
    //    })
    //    .catch(function (error) {
    //        console.log(error)
    //    })

    // axios.post('http://localhost:4567/usuarios',{
    //     PrtEmail : document.getElementById('email').value,
    //     PrtPassword : document.getElementById('password').value
    //     })
    //    .then(function (response) {
    //        console.log(response)
    //        console.log('contenido: ' + response.data)
    //        console.log('estatus: ' + response.status)
    //        document.getElementById('titulo').innerHTML = response.data
    //    })
    //    .catch(function (error) {
    //        console.log(error)
    //    })
    
    axios.post('http://localhost:4567/usuarios', {
    PrtEmail : document.getElementById('email').value,
    PrtPassword : document.getElementById('password').value
})
    .then(function (response) {
        console.log(response)
        console.log(response.data)
        console.log(response.statusText)
        document.getElementById('titulo').innerHTML = response.data
    })
    .catch(function (error) {
        console.log(error)
    })
})

       
           
