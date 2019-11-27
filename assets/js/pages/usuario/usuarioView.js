// Preencher Formulário de Alteração de Usuário
function preencherUsuarioAlt(usuario) {
    $("#codigoUsuarioAlt").val(usuario.id);
    $("#escolaridadeUsuarioAlt").val(usuario.escolaridade.id);
    $("#estadoCivilUsuarioAlt").val(usuario.estadoCivil.id);
    $("#batismoUsuarioAlt").val(usuario.batismo.id);
    $("#nacionalidadeUsuarioAlt").val(usuario.nacionalidade.id);
    $("#cargoUsuarioAlt").val(usuario.cargos.id);
    $("#cursoUsuarioAlt").val(usuario.cursos.id);
    $("#ministerioUsuarioAlt").val(usuario.ministerios.id);
    $("#nomeUsuarioAlt").val(usuario.nome);
    $("#nomeMaeUsuarioAlt").val(usuario.nomeMae);
    $("#nomePaiUsuarioAlt").val(usuario.nomePai);
    $("#nomeConjugeUsuarioAlt").val(usuario.nomeConjuge);
    $("#ufNascimentoUsuarioAlt").val(usuario.ufNascimento);
    $("#naturalidadeUsuarioAlt").val(usuario.naturalidade);
    $("#sexoUsuarioAlt").val(usuario.sexo);
    $("#profissaoUsuarioAlt").val(usuario.profissao);
    $("#dtNascimentoUsuarioAlt").val(usuario.dataNascimento);
    $("#cpfUsuarioAlt").val(usuario.cpf);
    $("#rgUsuarioAlt").val(usuario.rg);
    $("#observacoesUsuarioAlt").val(usuario.observacao);
    $("#situacaoUsuarioAlt").val(usuario.situacao);

    $("#escolaridadeUsuarioAlt").selectpicker('refresh');
    $("#estadoCivilUsuarioAlt").selectpicker('refresh');
    $("#batismoUsuarioAlt").selectpicker('refresh');
    $("#nacionalidadeUsuarioAlt").selectpicker('refresh');
    $("#cargoUsuarioAlt").selectpicker('refresh');
    $("#cursoUsuarioAlt").selectpicker('refresh');
    $("#ministerioUsuarioAlt").selectpicker('refresh');
    $("#sexoUsuarioAlt").selectpicker('refresh');

}

function limparUsuarioResult() {
    $("#usuarioResult").html('');
}

function limparUsuarioAlt() {
    $("#codigoUsuarioAlt").val('');
    $("#escolaridadeUsuarioAlt").val(0);
    $("#estadoCivilUsuarioAlt").val(0);
    $("#batismoUsuarioAlt").val(0);
    $("#nacionalidadeUsuarioAlt").val(0);
    $("#cargoUsuarioAlt").val(0);
    $("#cursoUsuarioAlt").val(0);
    $("#ministerioUsuarioAlt").val(0);
    $("#nomeUsuarioAlt").val('');
    $("#nomeMaeUsuarioAlt").val('');
    $("#nomePaiUsuarioAlt").val('');
    $("#nomeConjugeUsuarioAlt").val('');
    $("#ufNascimentoUsuarioAlt").val('');
    $("#naturalidadeUsuarioAlt").val('');
    $("#sexoUsuarioAlt").val(0);
    $("#profissaoUsuarioAlt").val('');
    $("#dtNascimentoUsuarioAlt").val('');
    $("#cpfUsuarioAlt").val('');
    $("#rgUsuarioAlt").val('');
    $("#observacoesUsuarioAlt").val('');
    $("#situacaoUsuarioAlt").val('');

    $("#escolaridadeUsuarioAlt").selectpicker('refresh');
    $("#estadoCivilUsuarioAlt").selectpicker('refresh');
    $("#batismoUsuarioAlt").selectpicker('refresh');
    $("#nacionalidadeUsuarioAlt").selectpicker('refresh');
    $("#cargoUsuarioAlt").selectpicker('refresh');
    $("#cursoUsuarioAlt").selectpicker('refresh');
    $("#ministerioUsuarioAlt").selectpicker('refresh');
    $("#sexoUsuarioAlt").selectpicker('refresh');

}

function limparUsuarioAdd() {
    $("#codigoUsuarioAdd").val('');
    $("#escolaridadeUsuarioAdd").val(0);
    $("#estadoCivilUsuarioAdd").val(0);
    $("#batismoUsuarioAdd").val(0);
    $("#nacionalidadeUsuarioAdd").val(0);
    $("#cargoUsuarioAdd").val(0);
    $("#cursoUsuarioAdd").val(0);
    $("#ministerioUsuarioAdd").val(0);
    $("#nomeUsuarioAdd").val('');
    $("#nomeMaeUsuarioAdd").val('');
    $("#nomePaiUsuarioAdd").val('');
    $("#nomeConjugeUsuarioAdd").val('');
    $("#ufNascimentoUsuarioAdd").val('');
    $("#naturalidadeUsuarioAdd").val('');
    $("#sexoUsuarioAdd").val(0);
    $("#profissaoUsuarioAdd").val('');
    $("#dtNascimentoUsuarioAdd").val('');
    $("#cpfUsuarioAdd").val('');
    $("#rgUsuarioAdd").val('');
    $("#observacoesUsuarioAdd").val('');
    $("#situacaoUsuarioAdd").val('');

    $("#escolaridadeUsuarioAdd").selectpicker('refresh');
    $("#estadoCivilUsuarioAdd").selectpicker('refresh');
    $("#batismoUsuarioAdd").selectpicker('refresh');
    $("#nacionalidadeUsuarioAdd").selectpicker('refresh');
    $("#cargoUsuarioAdd").selectpicker('refresh');
    $("#cursoUsuarioAdd").selectpicker('refresh');
    $("#ministerioUsuarioAdd").selectpicker('refresh');
    $("#sexoUsuarioAdd").selectpicker('refresh');
}

function limparUsuarioDel() {
    $("#idUsuarioDel").val('');
    $("#usuarioResultDel").html('');
}

function preencherEscolaridadeUsuarioView(escolaridade) {
    $("#escolaridadeUsuarioAdd").empty();
    $("#escolaridadeUsuarioAdd").append(`<option selected="selected" value="0">Selecione uma escolaridade</option>`);
    $.each(escolaridade, function (key, value) {
        $("#escolaridadeUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.nivelEscolaridade));
    });

    $("#escolaridadeUsuarioAlt").empty();
    $("#escolaridadeUsuarioAlt").append(`<option selected="selected" value="0">Selecione uma escolaridade</option>`);
    $.each(escolaridade, function (key, value) {
        $("#escolaridadeUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.nivelEscolaridade));
    });

    $('#escolaridadeUsuarioAdd').selectpicker('refresh');
    $('#escolaridadeUsuarioAlt').selectpicker('refresh');
}

function preencherEstadosCivisUsuarioView(estadoCivil) {
    $("#estadoCivilUsuarioAdd").empty();
    $("#estadoCivilUsuarioAdd").append(`<option selected="selected" value="0">Selecione uma opção</option>`);
    $.each(estadoCivil, function (key, value) {
        $("#estadoCivilUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.estadoCivil))
    });

    $("#estadoCivilUsuarioAlt").empty();
    $("#estadoCivilUsuarioAlt").append(`<option selected="selected" value="0">Selecione uma opção</option>`);
    $.each(estadoCivil, function (key, value) {
        $("#estadoCivilUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.estadoCivil))
    });

    $('#estadoCivilUsuarioAdd').selectpicker('refresh');
    $('#estadoCivilUsuarioAlt').selectpicker('refresh');
}

function preencherBatismosUsuarioView(batismo) {
    $("#batismoUsuarioAdd").empty();
    $("#batismoUsuarioAdd").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(batismo, function (key, value) {
        $("#batismoUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.nomeIgreja))
    });

    $("#batismoUsuarioAlt").empty();
    $("#batismoUsuarioAlt").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(batismo, function (key, value) {
        $("#batismoUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.nomeIgreja))
    });

    $('#batismoUsuarioAdd').selectpicker('refresh');
    $('#batismoUsuarioAlt').selectpicker('refresh');
}

function preencherNacionalidadesUsuarioView(nacionalidade) {
    $("#nacionalidadeUsuarioAdd").empty();
    $("#nacionalidadeUsuarioAdd").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(nacionalidade, function (key, value) {
        $("#nacionalidadeUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.nacionalidade))
    });

    $("#nacionalidadeUsuarioAlt").empty();
    $("#nacionalidadeUsuarioAlt").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(nacionalidade, function (key, value) {
        $("#nacionalidadeUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.nacionalidade))
    });

    $('#nacionalidadeUsuarioAdd').selectpicker('refresh');
    $('#nacionalidadeUsuarioAlt').selectpicker('refresh');
}

function preencherCargosUsuarioView(cargo) {
    $("#cargoUsuarioAdd").empty();
    $("#cargoUsuarioAdd").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(cargo, function (key, value) {
        $("#cargoUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.cargo))
    });

    $("#cargoUsuarioAlt").empty();
    $("#cargoUsuarioAlt").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(cargo, function (key, value) {
        $("#cargoUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.cargo))
    });

    $('#cargoUsuarioAdd').selectpicker('refresh');
    $('#cargoUsuarioAlt').selectpicker('refresh');
}

function preencherCursosUsuarioView(curso) {
    $("#cursoUsuarioAdd").empty();
    $("#cursoUsuarioAdd").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(curso, function (key, value) {
        $("#cursoUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.nome))
    });

    $("#cursoUsuarioAlt").empty();
    $("#cursoUsuarioAlt").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(curso, function (key, value) {
        $("#cursoUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.nome))
    });

    $('#cursoUsuarioAdd').selectpicker('refresh');
    $('#cursoUsuarioAlt').selectpicker('refresh');
}

function preencherMinisteriosUsuarioView(ministerio) {
    $("#ministerioUsuarioAdd").empty();
    $("#ministerioUsuarioAdd").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(ministerio, function (key, value) {
        $("#ministerioUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.descMinisterio))
    });

    $("#ministerioUsuarioAlt").empty();
    $("#ministerioUsuarioAlt").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(ministerio, function (key, value) {
        $("#ministerioUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.descMinisterio))
    });

    $('#ministerioUsuarioAdd').selectpicker('refresh');
    $('#ministerioUsuarioAlt').selectpicker('refresh');
}

function preencherMinisteriosUsuarioView(ministerio) {
    $("#ministerioUsuarioAdd").empty();
    $("#ministerioUsuarioAdd").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(ministerio, function (key, value) {
        $("#ministerioUsuarioAdd").append($('<option></option>').attr('value', value.id).text(value.descMinisterio))
    });

    $("#ministerioUsuarioAlt").empty();
    $("#ministerioUsuarioAlt").append(`<option selected="selected" value="0">Selecione</option>`);
    $.each(ministerio, function (key, value) {
        $("#ministerioUsuarioAlt").append($('<option></option>').attr('value', value.id).text(value.descMinisterio))
    });

    $('#ministerioUsuarioAdd').selectpicker('refresh');
    $('#ministerioUsuarioAlt').selectpicker('refresh');
}

// Criar Tabela De Listagem De Usuário
function criarTabelaUsuario(resultTab, usuario) {
    let table = `
    <div class="col-md-12">
        <table class="table table-striped table-bordered" id="tabelaUsuario">
            <thead>
                <tr>
                    <th>CÓDIGO</th>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>FUNÇÃO</th>
                </tr>
                </thead>
                <tbody id="usuarioRows">
                </tbody>
        </table>
    </div>
    `;

    $(resultTab).html(table);

    let usuarios = usuario;
    if (!Array.isArray(usuarios)) {
        usuarios = [usuario];
    }

    for (let i in usuarios){
        $("#usuarioRows").append(
            `<tr>
            <td>${usuarios[i].id}</td>
            <td>${usuarios[i].nome}</td>
            <td>${usuarios[i].cpf}</td>
            <td>${usuarios[i].cargos.cargo}</td>
        </tr>`
        );
    }

    $('#tabelaUsuario').DataTable({
        language: {
            "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
        },
        "responsive": true,
        "displayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "ALL"]]
    });
}

// FUNÇÃO QUE ORDENA POR GRUPO TABELA DE USUÁRIO
$('#usuarioRows').on( 'click', 'tr.group', function () {
    var currentOrder = table.order()[0];
    if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
        table.order( [ groupColumn, 'desc' ] ).draw();
    }
    else {
        table.order( [ groupColumn, 'asc' ] ).draw();
    }
} );
