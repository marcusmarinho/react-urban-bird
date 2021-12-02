export interface DetailOffer {
    location: {
        descricao: string;
        id: number;
    },
    info: {
        descricao: string;
        id: number;
    }
    detail: {
        anunciante: string;
        categoria: string;
        descricao_oferta: string;
        destaque: boolean;
        id: number;
        titulo: string;
        valor: number;
    }
}