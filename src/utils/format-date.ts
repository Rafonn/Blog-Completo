export const FormatDate = (date: string) => {
    const dateObj = new Date();
    return dateObj.toLocaleDateString('pt-br', {
        timeZone: 'America/Sao_Paulo'
    })
}