require("jquery");
require("underscore");
require("backbone");
require("./node_modules/bootstrap/dist/css/bootstrap.css");
require("./app/css/main.css");

$(function() {
  require("./app/js/app.js");
  require("./app/js/models/contact.js");
  require("./app/js/collections/contacts.js");
  require("./app/js/views/contact.js");
  require("./app/js/views/contacts.js");
  require("./app/js/views/contactForm.js");
  require("./app/js/router.js");
});

$(function() {
  ContactManager.start({
    contacts: [
      {
        id: 1,
        name : 'Terrence S. Hatfield',
        tel: '651-603-1723',
        email: 'TerrenceSHatfield@rhyta.com'
      },
      {
        id: 2,
        name : 'Chris M. Manning',
        tel: '513-307-5859',
        email: 'ChrisMManning@dayrep.com'
      },
      {
        id: 3,
        name : 'Ricky M. Digiacomo',
        tel: '918-774-0199',
        email: 'RickyMDigiacomo@teleworm.us'
      },
      {
        id: 4,
        name : 'Michael K. Bayne',
        tel: '702-989-5145',
        email: 'MichaelKBayne@rhyta.com'
      },
      {
        id: 5,
        name : 'John I. Wilson',
        tel: '318-292-6700',
        email: 'JohnIWilson@dayrep.com'
      },
      {
        id: 6,
        name : 'Rodolfo P. Robinett',
        tel: '803-557-9815',
        email: 'RodolfoPRobinett@jourrapide.com'
      }
    ]
  });
});
