export function formatCurrency(value: number) {
    const currency = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value).replace("R$", "")

    return currency
}