// var app = {

//     findByName: function() {
//         console.log('findByName');
//         this.store.findByName($('.search-key').val(), function(employees) {
//             var l = employees.length;
//             var e;
//             $('.employee-list').empty();
//             for (var i=0; i<l; i++) {
//                 e = employees[i];
//                 $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
//             }
//         });
//     },

//     showAlert: function (message, title) {
//         if (navigator.notification) {
//             navigator.notification.alert(message, null, title, 'OK');
//         } else {
//             alert(title ? (title + ": " + message) : message);
//         }
//     },

//     initialize: function() {
//         this.store = new MemoryStore(function() {
//             self.showAlert('Store Initialized', 'Info');
//             });

//         $('.search-key').on('keyup', $.proxy(this.findByName, this));
//     }

// };

var remoteDB = {
    user: 'thoushoonlyconceencither',
    pass: 'f6XftcvPtpb6hGT1YyRRS2hI',
    server: 'elivero.cloudant.com',
    db: 'pouch'
}

var db = new PouchDB('pouch');

db.put({
  _id: 'cabbage',
  image: 'cabbage.gif',
  price: 3
});

db.changes().on('change', function() {
  console.log('Ch-Ch-Changes');
});

remoteDB.dsn = 'http://' + remoteDB.user + ':' + remoteDB.pass + '@' +
               remoteDB.server + '/' + remoteDB.db;

console.log("Remote DSN: ", remoteDB.dsn);

db.replicate.to(remoteDB.dsn);

// app.initialize();