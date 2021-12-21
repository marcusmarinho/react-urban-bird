describe('order flow', () => {
    it('Visits the urban-bird-react-project', () => {
        cy.visit('http://localhost:3000');

        cy.request('https://app2jsonserver.herokuapp.com/ofertas')
            .should((response) => {
                expect(response.status).to.eq(200);
            });

        cy.contains('Super Burger').click();

        cy.url().should('include', '/detalhe/1')

        cy.request('https://app2jsonserver.herokuapp.com/ofertas/1')
            .should((response) => {
                expect(response.status).to.eq(200);
            });

        cy.request('https://app2jsonserver.herokuapp.com/como-usar/1')
            .should((response) => {
                expect(response.status).to.eq(200);
            });

        cy.request('https://app2jsonserver.herokuapp.com/onde-fica/1')
            .should((response) => {
                expect(response.status).to.eq(200);
            });

        cy.contains('Add To Wallet').click();
        cy.get('.Header_walletIco__3qXtO').click();
        cy.url().should('include', '/sacola')
        cy.contains('Super Burger').click();
        cy.contains('+').click();
        cy.contains('Finalizar Compra').click();
        cy.get('#address').type('xxxxxxxx');
        cy.get('#number').type('11111');
        cy.get('#complement').type('Casa');
        cy.get('#purchaseMethod').select('pix');
        cy.contains('Confirmar Compra').click();
        cy.request('POST','https://app2jsonserver.herokuapp.com/pedidos' , {
            body: {
                inputAddress: "xxxxxxxx",
                inputComplement: "Casa",
                inputNumber: "1111",
                inputPaymentMethod: "pix",
                products: [
                    {
                        descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
                        id: '1',
                        img: {url: '/assets/ofertas/1/img1.jpg'},
                        quantidade: '2',
                        titulo: "Super Burger",
                        valor: '29.9'    
                    }
                ]
            }
        })
        .should((response) => {
            cy.url().should('include', `/comprovante/${response.body.id + 1}`)
            expect(response.status).to.eq(201);
        });
    })
})