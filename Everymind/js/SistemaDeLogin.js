function verificarlogin(escolha)
{
    if(escolha == 1)
    {
        nomeCompleto = document.getElementById("nome").value;
        dataNascimento = document.getElementById("datanascimento").value;
        cpf = document.getElementById("cpf").value;
        cep = document.getElementById("cep").value;
        endereco = document.getElementById("endereco").value;
        email = document.getElementById("email").value;
        telefone = document.getElementById("telefone").value;
        senha = document.getElementById("senha").value; 
        if(nomeCompleto == "")
        alert("ERRO\nDigite seu nome");
        else if(dataNascimento == "")
        alert("ERRO\nDigite sua data de nascimento");
        else if(cpf == "")
        alert("ERRO\nDigite seu CPF");
        else if(cep == "")
        alert("ERRO\nDigite seu CEP");
        else if(endereco == "")
        alert("ERRO\nDigite seu endereco");
        else if(email == "")
        alert("ERRO\nDigite seu email");
        else if(telefone == "")
        alert("ERRO\nDigite seu telefone");   
        else if(senha == "")
        alert("ERRO\nDigite sua senha");
        else
        {
            alert("Cadastro realizado com sucesso.");
            window.open("login.html","_self");
        }
    }
    else
    {
        let usuarioValido = email;
        let senhaValida = senha;    
        usuarioLogin = document.getElementById("usuariologin").value;
        senhaLogin = document.getElementById("senhalogin").value;
        if (usuarioLogin != usuarioValido && senhaLogin =="")
        {
            alert("Usuario Invalido, Senha Vazia.");
        }
        else if(usuarioLogin != usuarioValido && senhaLogin != senhaValida)
        {
            alert("Usuario Invalido e a senha invalida.");
        }
        else if (usuarioLogin != usuarioValido && senhaLogin == senhaValida)
        {
            alert("Usuario Valido, senha invalida.");
        }
        // Vazio
        else if (usuarioLogin=="" && senhaLogin =="") 
        {
            alert("Usuario e senha vazia.");
        }
        else if (usuarioLogin == "" && senhaLogin != senhaValida)
        {
            alert("Usuario vazio e senha invalida");
        }
        else if (usuarioLogin == "" && senhaLogin == senhaValida) 
        {
            alert("Usuario Vazio, senha valida."); 
        }
        //Usuario Valido
        else if (usuarioLogin == usuarioValido && senhaLogin == "") 
        {
            alert("Usuario Vazio, senha vazia.");  
        }
        else if (usuarioLogin == usuarioValido && senhaLogin != senhaValida)
        {
            alert("Usuario Valido, senha invalida.");
        }
        else if (usuarioLogin == usuarioValido && senhaLogin == senhaValida) 
        {
            alert("Login realizado com sucesso\nBem vindo")
        }    
    }
}    
  
