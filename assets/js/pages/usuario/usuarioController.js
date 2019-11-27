$(document).ready(init);

function init() {

    preencherEscolaridadesUsuario(function (result) {
        preencherEscolaridadeUsuarioView(result);
    });

    preencherEstadosCivisUsuario(function (result) {
        preencherEstadosCivisUsuarioView(result);
    });

    preencherBatismosUsuario(function (result) {
        preencherBatismosUsuarioView(result);
    });

    preencherNacionalidadesUsuario(function (result) {
        preencherNacionalidadesUsuarioView(result);
    });

    preencherCargosUsuario(function (result) {
        preencherCargosUsuarioView(result);
    });

    preencherCursosUsuario(function (result) {
        preencherCursosUsuarioView(result);
    });

    preencherMinisteriosUsuario(function (result) {
        preencherMinisteriosUsuarioView(result);
    });

};

$("#buscaUsuariosAll").on('click', function() {
    $("#emailUsuarioTab").val(null);
    buscaUsuarioController($(this));
});

$("#buscaUsuario").on('click', function() {
    buscaUsuarioController($(this));
});

$("#buscaUsuarioDel").on('click', function() {
    buscaUsuarioController($(this));
});

$("#buscaUsuarioAlt").on('click', function() {
    buscaUsuarioController($(this));
});

$('a[data-toggle="tab"]').on('click', function () {
    limparUsuarioAlt();
    limparUsuarioDel();
    limparUsuarioResult();
});

$("#adicionarUsuario").on('click', function() {
    let usuario = {
        escolaridade: {
            id: $("#escolaridadeUsuarioAdd option:selected").val()
        },
        estadoCivil: {
            id: $("#estadoCivilUsuarioAdd option:selected").val()
        },
        bastismo: {
            id: $("#bastismoUsuarioAdd option:selected").val()
        },
        nacionalidade: {
            id: $("#nacionalidadeUsuarioAdd option:selected").val()
        },
        cargos: {
            id: $("#cargosUsuarioAdd option:selected").val()
        },
        cursos: {
            id: $("#eventosUsuarioAdd option:selected").val()
        },
        ministerios: {
            id: $("#eventosUsuarioAdd option:selected").val()
        },
        nome: $("#nomeUsuarioAdd").val(),
        nomePai: $("#nomePaiUsuarioAdd").val(),
        nomeMae: $("#nomeMaeUsuarioAdd").val(),
        nomeConjuge: $("#nomeConjugeUsuarioAdd").val(),
        ufNascimento:  $("#ufNascimentoUsuarioAdd option:selected").val(),
        naturalidade: $("#naturalidadeUsuarioAdd").val(),
        sexo: {
            id: $("#sexoUsuarioAdd option:selected").val()
        },
        profissao: $("#profissaoUsuarioAdd").val(),
        observacao: $("#observacaoUsuarioAdd").val(),
        dataNascimento: $("#dtNascimentoUsuarioAdd").val(),
        cpf: $("#cpfUsuarioAdd").val(),
        rg: $("#rgUsuarioAdd").val(),
        observacao: $("#observacoesUsuarioAdd").val(),
        situacao: $("#situacaoUsuarioAdd").val(),

    };

    adicionarUsuario(JSON.stringify(usuario));
});

$("#alterarUsuario").on('click', function() {
    let usuario = {
        id: $("#codigoUsuarioAlt").val(),
        nome: $("#nomeUsuarioAlt").val(),
        cpf: $("#cpfUsuarioAlt").val(),
        email: $("#emailUsuarioAlt").val(),
        categoria: {
            id: $("#categoriaUsuarioAlt").val()
        },
        municipio: $("#municipioUsuarioAlt").val(),
        estado: {
            id: $("#estadoUsuarioAlt").val()
        },
        endereco: $("#enderecoUsuarioAlt").val(),
        cep: $("#cepUsuarioAlt").val(),
        perfil: {
            id: $("#perfilUsuarioAlt").val()
        },
        telefone: $("#telefoneUsuarioAlt").val()
    };

    alterarUsuario(JSON.stringify(usuario));
});

$("#removerUsuario").on('click', function() {
    let emailUsuarioDel = $("#emailUsuarioDelTab").val();
    if (emailUsuarioDel != ""){
        $("#emailUsuarioDelTab").html('');
        removerUsuario(emailUsuarioDel);
    }
});

function buscaUsuarioController(data) {
    let email;
    let resultTab;

    if (data.attr("id") == "buscaUsuario" || data.attr("id") == "buscaUsuariosAll"){
        email = $("#emailUsuarioTab").val();
        resultTab = $("#usuarioResult");
    } else if (data.attr("id") == "buscaUsuarioDel"){
        email = $("#emailUsuarioDelTab").val();
        resultTab = $("#usuarioResultDel");
    } else if (data.attr("id") == "buscaUsuarioAlt"){
        email = $("#emailUsuarioAltTab").val();
    }

    buscarUsuario(email, function (result) {
        if (data.attr("id") == "buscaUsuarioAlt"){
            preencherUsuarioAlt(result);
        } else {
            criarTabelaUsuario(resultTab, result);
        }
    });
}