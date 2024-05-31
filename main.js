$(document).ready(function() {
    carregarTarefas()

    //Adicionar tarefa
    $('#addBtn').on('click', function() {
        let taskName = $('#input').val();
        if (taskName.length > 0) {
        $('#list').fadeIn(400, function() {
            $(this).append('<li><span>&times;</span>' + taskName + '</li>')
            salvarTarefas()
        }) 
    } $('#input').val('')
    })

    //Marcar tarefa como concluida
    $(document).on('click','li', function() {
        $(this).toggleClass('completed');
        salvarTarefas()
    })

    //Remover tarefa
    $(document).on('click','span', function(e) {
        e.stopPropagation();
        $(this).parent().fadeOut(400, function() {
            $(this).remove();
            salvarTarefas()
        })
    })

    //Salvar tarefas
    function salvarTarefas() {
        let tasks = $('#list').html()
        localStorage.setItem('tasks', tasks)
    }

    //Recuperar tarefas
    function carregarTarefas() {
        let tasks = localStorage.getItem('tasks')
        if(tasks) {
            $('#list').html(tasks);
        }
    }
})

