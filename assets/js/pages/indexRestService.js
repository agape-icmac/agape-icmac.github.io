// Função P/ Buscar Usuário Por Id

// Função p/ cadastrar Usuário
function buscarQtds() {
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
