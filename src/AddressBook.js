// Uue aadressiraamatu loomiseks
function AddressBook() {

    // Aadresse hoitakse listis
    this.contacts = [];
}

// Funktsioon addContact, mis lisab etteantud kontakti contacts listi
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
};

// Funktsioon getContact, mis etteantud indeksi järgi tagastab vastava kontakti listist
AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
};

// Funktsioon, mis etteantud indeksi järgi kustutab listist kontakti
AddressBook.prototype.deleteContact = function (index) {
    this.contacts.splice(index, 1);
};