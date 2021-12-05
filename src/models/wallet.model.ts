export interface WalletItem {
    id: number,
    img: string,
    titulo: string,
    descricao_oferta: string,
    valor: number,
    quantidade: number
}

export interface Wallet {
    products: WalletItem[];
    setProducts?: any
}