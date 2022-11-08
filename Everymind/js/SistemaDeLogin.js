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
        if (email!= usuarioValido && senha =="")
        {
            alert("Email invalido, Senha Vazio.");
        }
        else if(email!= usuarioValido && senha != senhaValida)
        {
            alert("Email invalido e a senha invalida.");
        }
        else if (email!= usuarioValido && senha == senhaValida)
        {
            alert("Email valido, senha invalida.");
        }
        // Vazio
        else if (usuario=="" && senha =="") 
        {
            alert("Email e senha vazio.");
        }
        else if (email== "" && senha != senhaValida)
        {
            alert("Email vazio e senha invalida");
        }
        else if (email== "" && senha == senhaValida) 
        {
            alert("Email vazio, senha valida."); 
        }
        //emailValido
        else if (email== usuarioValido && senha == "") 
        {
            alert("Email vazio, senha vazia.");  
        }
        else if (email== usuarioValido && senha != senhaValida)
        {
            alert("Email valido, senha invalida.");
        }
        else if (email== usuarioValido && senha == senhaValida) 
        {
            alert("Login realizado com sucesso\nBem vindo")
        }    
    }
}    
  
