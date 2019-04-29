// Uue aadressiraamatu loomiseks
function AddressBook() {

    // Aadresse hoitakse listis
    this.contacts = [];

    // Vaikimisi väär, sest pole veel testitud
    this.initialComplete = false;
}

// Asünkroonne
AddressBook.prototype.getInitialContacts = function (cb) {

    // Et saaks kasutada this-i praeguse hetke väärtust ka hiljem(this väärtus muutub pidevalt),
    // tuleb määrata see muutuja väärtusena
    var self = this;


    setTimeout(function () {

        // Kui kõik toimis õigesti määratakse muutuja tõeseks
        self.initialComplete = true;

        // Tagasta callback
        if (cb) {
            return cb();
        }
    })
};

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