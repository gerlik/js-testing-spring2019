describe('Address Book', function () {
    it('should be able to add a contact', function () {
        var addressBook = new AddressBook(),
            thisContact = new Contact();

        // Aadressiraamatusse luuakse uus kontakt
        addressBook.addContact(thisContact);

        // Aadressiraamatu esimene kontakt peab olema sama kontakt, mis just sinna sisestati
        expect(addressBook.getContact(0)).toBe(thisContact);
    })
});