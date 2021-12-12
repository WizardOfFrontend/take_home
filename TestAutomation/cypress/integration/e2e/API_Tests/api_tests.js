describe('GET Requests Tests', () => {
    it('Get Group names & IDs', () => {
        cy.request('GET', 'https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed').then(response => {
            expect(response.status).eql(200);
            expect(response.body.length).eql(2);
            expect(response.body[0].id).eql("a9f6a4b7-d03c-4a45-b64b-791e054f36b8");
            expect(response.body[0].label).eql("Group by Function");
            expect(response.body[1].id).eql("f1b01b57-3147-476a-a632-0c10ad2a3c1a");
            expect(response.body[1].label).eql("Group by Role");
        })
    });

    it('Get Group by Function', () => {
        cy.request('GET', 'https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8').then(response => {
            cy.log(response)
            expect(response.status).eql(200);
            expect(response.body.id).eql("groupByFunction");
            expect(response.body.label).eql("Group by Function");
            expect(response.body.data).to.exist;
        })
    });

    it('Get Group by Role', () => {
        cy.request('GET', 'https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a').then(response => {
            cy.log(response)
            expect(response.status).eql(200);
            expect(response.body.id).eql("groupByRole");
            expect(response.body.label).eql("Group by Role");
            expect(response.body.data).to.exist;
        })
    });

    // will get 404 error
    it('Retreiving the data with an incorrect id', () => {
        cy.request(
            {
                method: 'GET',
                url: 'https://run.mocky.io/v3/2',
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).eql(404);
            })
    });
});