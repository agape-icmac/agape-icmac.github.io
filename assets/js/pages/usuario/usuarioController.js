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

    $("#cpfUsuarioTab").val(null);
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
        batismo: {
            id: $("#batismoUsuarioAdd option:selected").val()
        },
        nacionalidade: {
            id: $("#nacionalidadeUsuarioAdd option:selected").val()
        },
        cargos: [
            {
                id: $("#cargoUsuarioAdd option:selected").val()
            }
        ],
        cursos: [
            {
                id: $("#cursoUsuarioAdd option:selected").val()
            }
        ],
        ministerios: [
            {
                id: $("#ministerioUsuarioAdd option:selected").val()
            }
        ],
        nome: $("#nomeUsuarioAdd").val(),
        nomePai: $("#nomePaiUsuarioAdd").val(),
        nomeMae: $("#nomeMaeUsuarioAdd").val(),
        nomeConjuge: $("#nomeConjugeUsuarioAdd").val(),
        ufNascimento:  $("#ufUsuarioAdd").val(),
        naturalidade: $("#naturalidadeUsuarioAdd").val(),
        sexo: $("#sexoUsuarioAdd option:selected").val(),
        profissao: $("#profissaoUsuarioAdd").val(),
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
        escolaridade: {
            id: $("#escolaridadeUsuarioAlt option:selected").val()
        },
        estadoCivil: {
            id: $("#estadoCivilUsuarioAlt option:selected").val()
        },
        batismo: {
            id: $("#batismoUsuarioAlt option:selected").val()
        },
        nacionalidade: {
            id: $("#nacionalidadeUsuarioAlt option:selected").val()
        },
        cargos: [
            {
                id: $("#cargoUsuarioAlt option:selected").val()
            }
        ],
        cursos: [
            {
                id: $("#cursoUsuarioAlt option:selected").val()
            }
        ],
        ministerios: [
            {
                id: $("#ministerioUsuarioAlt option:selected").val()
            }
        ],
        nome: $("#nomeUsuarioAlt").val(),
        nomePai: $("#nomePaiUsuarioAlt").val(),
        nomeMae: $("#nomeMaeUsuarioAlt").val(),
        nomeConjuge: $("#nomeConjugeUsuarioAlt").val(),
        ufNascimento:  $("#ufUsuarioAlt").val(),
        naturalidade: $("#naturalidadeUsuarioAlt").val(),
        sexo:  $("#sexoUsuarioAlt option:selected").val(),
        profissao: $("#profissaoUsuarioAlt").val(),
        dataNascimento: $("#dtNascimentoUsuarioAlt").val(),
        cpf: $("#cpfUsuarioAlt").val(),
        rg: $("#rgUsuarioAlt").val(),
        observacao: $("#observacoesUsuarioAlt").val(),
        situacao: $("#situacaoUsuarioAlt").val(),

    };

    alterarUsuario(JSON.stringify(usuario));
});

$("#removerUsuario").on('click', function() {

    let cpfUsuarioDel = $("#cpfUsuarioDelTab").val();
    if (cpfUsuarioDel != ""){
        $("#cpfUsuarioDelTab").html('');
        removerUsuario(cpfUsuarioDel);
    }

});

function buscaUsuarioController(data) {

    let cpfUsuario
    let resultTab;

    if (data.attr("id") == "buscaUsuario" || data.attr("id") == "buscaUsuariosAll"){
        cpfUsuario = $("#cpfUsuarioTab").val();
        resultTab = $("#usuarioResult");
    } else if (data.attr("id") == "buscaUsuarioDel"){
        cpfUsuario = $("#cpfUsuarioDelTab").val();
        resultTab = $("#usuarioResultDel");
    } else if (data.attr("id") == "buscaUsuarioAlt"){
        cpfUsuario = $("#cpfUsuarioAltTab").val();
    }

    buscarUsuario(cpfUsuario, function (result) {
        if (data.attr("id") == "buscaUsuarioAlt"){
            preencherUsuarioAlt(result);
        } else {
            criarTabelaUsuario(resultTab, result);
        }
    });

}