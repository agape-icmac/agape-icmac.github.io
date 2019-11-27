// Função P/ Buscar Usuário Por Id
function buscarUsuario(email, result){
    if (email != null){
        $.ajax({
            url: Api + 'discipulo/' + email,
            success: function (data) {
                result(data);
            },
            error: function () {
                swal("Erro :(", "Não foi possível buscar o Usuário: " + email, "error");
            }
        });
    } else {
        $.ajax({
            url: Api+'discipulo',
            success: function(data){
                result(data);
            },
            error: function () {
                swal("Erro :(", "Não foi possível buscar os Usuários", "error");
            }
        });
    }
}


// Função p/ cadastrar Usuário
function adicionarUsuario(discipulo) {
    $.ajax({
        method : 'POST',
        url :  Api+'discipulo',
        contentType: 'application/json',
        data : discipulo,
        success : function () {
            swal("Sucesso :)", "Usuário adicionado com sucesso.", "success");
            limparUsuarioAdd();
        },
        error: function () {
            swal("Erro :(", "Não foi possível adicionar o Usuário.", "error");
        }
    });
};

// Função p/ alterar Usuário
function alterarUsuario(discipulo) {
    $.ajax({
        method : 'POST',
        url :  Api+'discipulo',
        contentType: 'application/json',
        data : discipulo,
        success : function () {
            swal("Sucesso :)", "Usuário alterado com sucesso.", "success");
            limparUsuarioAlt();
        },
        error: function () {
            swal("Erro :(", "Não foi possível alterar o Usuário.", "error");
        }
    });
};

// Função P/ Remover Usuário Por Id
function removerUsuario(email) {
    $.ajax({
        method : 'DELETE',
        url :  Api+'discipulo/'+email,
        success : function () {
            swal("Sucesso :)", "Usuário Removido: "+email, "success");
            limparUsuarioDel();
        },
        error: function () {
            swal("Erro :(", "Não foi possível remover o Usuário: "+email, "error");
        }
    });
}

function preencherEscolaridadesUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'escolaridade',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar  os cargoss: ", "warning");
        }
    });
}

function preencherEstadosCivisUsuario(result) {
    return $.ajax({
        method : 'GET',
        url :  Api+'estadoCivil',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar  os cargoss: ", "warning");
        }
    });
}

function preencherBatismosUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'batismo',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar  os cargoss: ", "warning");
        }
    });
}

function preencherNacionalidadesUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'nacionalidade',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar  os cargoss: ", "warning");
        }
    });
}

function preencherCargosUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'cargoDiscipulo',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar  os cargoss: ", "warning");
        }
    });
}

function preencherCursosUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'curso',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar  os cargoss: ", "warning");
        }
    });
}

function preencherMinisteriosUsuario(result) {
    $.ajax({
        method : 'GET',
        url :  Api+'ministerio',
        success : function (data) {
            result(data);
        },
        error: function () {
            swal("Erro :(", "Não foi possível buscar  os cargoss: ", "warning");
        }
    });
}
