//Funçao principal
export const notificacao = (tipo, mensagem, icon) => {
    window.Lobibox.notify(tipo, {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        sound: false,
        delayIndicator: true,
        icon: `${icon}`,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: mensagem
    });
}

export const notificacaoErro = (mensagem =
    "Erro ao enviar a mensagem!") => {
    notificacao('error', mensagem, 'bi bi-x-circle-fill')
};

export const notificacaoSucesso = (mensagem =
    "Mensagem enviada com sucesso!") => {
    notificacao('success', mensagem, 'bi bi-check')
};

export const demandaErro = (mensagem =
    "Erro ao cadastrar a demanda") => {
    notificacao('error', mensagem, 'bi bi-x-circle-fill')
};

export const demandaSucesso = (mensagem =
    "Demanda cadastrada com sucesso!") => {
    notificacao('success', mensagem, 'bi bi-check')
}
export const semAtividades = (mensagem =
    "Você ainda não possui atividades!") => {
    notificacao('warning', mensagem)
}
