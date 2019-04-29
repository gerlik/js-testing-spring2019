describe('Address Book', function () {

    // Kuna neid muutujaid läheb vaja mitmes testis on mõtekas need siin defineerifa
    // et iga kord seda tegema ei peaks
    // EELSEADISTUS
    var addressBook,
        thisContact;

    // Enne testimise algust luuakse kaks objekti millega testima hakatakse,
    // tõstetud siia samal põhjusel mis muutujad
    beforeEach(function () {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function () {

        // Aadressiraamatusse luuakse uus kontakt
        addressBook.addContact(thisContact);

        // Aadressiraamatu esimene kontakt peab olema sama kontakt, mis just sinna sisestati
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function () {

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        // Kontakti ei tohi eksisteerida
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

// Uus test
describe('Async Address Book', function () {
    var addressBook = new AddressBook();

    // Enne testimist peab callback olema tagasi tulnud ja saab teha võrdluse real 48
    beforeEach(function (done) {
        addressBook.getInitialContacts(function () {

            // Tehtud
            done();
        });

    });

    it('should grab inital contacts', function () {
        expect(addressBook.initialComplete).toBe(true);
        // done();   // Tekkis error sellega, seda pole siia vaja
    });
});