// Preencher Formulário de Alteração de Usuário
function preencherUsuarioAlt(usuario) {
    $("#codigoUsuarioAlt").val(usuario.id);
    $("#nomeUsuarioAlt").val(usuario.nome);
    $("#cpfUsuarioAlt").val(usuario.cpf);
    $("#emailUsuarioAlt").val(usuario.email);
    $("#estadoUsuarioAlt").val(usuario.estado.id);
    $("#categoriaUsuarioAlt").val(usuario.categoria.id);
    $("#municipioUsuarioAlt").val(usuario.municipio);
    $("#enderecoUsuarioAlt").val(usuario.endereco);
    $("#cepUsuarioAlt").val(usuario.cep);
    $("#perfilUsuarioAlt").val(usuario.perfil.id);
    $("#telefoneUsuarioAlt").val(usuario.telefone);

    $('#estadoUsuarioAlt').selectpicker('refresh');
    $('#categoriaUsuarioAlt').selectpicker('refresh');
    $('#perfilUsuarioAlt').selectpicker('refresh');

}

function limparUsuarioResult() {
    $("#usuarioResult").html('');
}

function limparUsuarioAlt() {
    $("#codigoUsuarioAlt").val('');
    $("#nomeUsuarioAlt").val('');
    $("#cpfUsuarioAlt").val('');
    $("#emailUsuarioAlt").val('');
    $("#estadoUsuarioAlt").val(0);
    $("#categoriaUsuarioAlt").val(0);
    $("#perfilUsuarioAlt").val(0);
    $("#municipioUsuarioAlt").val('');
    $("#enderecoUsuarioAlt").val('');
    $("#cepUsuarioAlt").val('');
    $("#telefoneUsuarioAlt").val('');

    $('#estadoUsuarioAlt').selectpicker('refresh');
    $('#categoriaUsuarioAlt').selectpicker('refresh');
    $('#perfilUsuarioAlt').selectpicker('refresh');
}

function limparUsuarioAdd() {
    $("#nomeUsuarioAdd").val('');
    $("#cpfUsuarioAdd").val('');
    $("#emailUsuarioAdd").val('');
    $("#estadoUsuarioAdd").val(0);
    $("#categoriaUsuarioAdd").val(0);
    $("#perfilUsuarioAdd").val(0);
    $("#municipioUsuarioAdd").val('');
    $("#enderecoUsuarioAdd").val('');
    $("#cepUsuarioAdd").val('');
    $("#telefoneUsuarioAdd").val('');

    $('#estadoUsuarioAdd').selectpicker('refresh');
    $('#categoriaUsuarioAdd').selectpicker('refresh');
    $('#perfilUsuarioAdd').selectpicker('refresh');
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
                    <th>E-MAIL</th>
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
            <td>${usuarios[i].email}</td>
            <td>${usuarios[i].categoria.categoria}</td>
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
