describe('Testing Orangehrm', () => {
    it('Testcase-1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        var number = Math.floor(Math.random() * 100000);
        cy.logindetails('Admin', 'admin123');
        cy.addempdetails('Krisna', 'sai', 'kongandla', number, '/t1/bookenviron.jpg', 'kda@seedd@ai@1993', 'krishnasai123', 'krishnasai123', 'Disabled');
        cy.personalcustomdetails('1111111', '2222222222', 'Nov', '2040', '28', '#personal_optGender_1', '333333', '444444', 'Single', 'Indian', 'Jan', '1998', '10', 'Tinku', 'No', 'AB+');
        cy.personalcustomdetails('100000000', '2000000', 'Jul', '2025', '2', '#personal_optGender_2', '300000', '4000000', 'Married', 'French', 'Dec', '1956', '30', 'ayansh', 'Yes', 'O-');
        cy.personalcustomdetails('10101011', '202020222', 'Dec', '2076', '10', '#personal_optGender_1', '303030033', '4040404', 'Other', 'Danish', 'Jun', '2005', '23', 'mani', 'Not at all', 'A-');
    })
})