    const controles = document.getElementById('controles');
    const entrada = document.getElementById('entrada');
    controles.addEventListener('change', handleChange);

    function handleChange(event){
        const value = event.target.value;

        if (isNaN(document.getElementById('entrada').value)) {
            document.getElementById('resultado').value = "Não é um número!"
        }else{
            document.getElementById('resultado').value = document.getElementById('entrada').value * value;
        }

        //document.getElementById('resultado').value = document.getElementById('entrada').value * value;
    }