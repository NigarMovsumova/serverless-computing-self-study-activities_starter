(function () {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: 'AIzaSyBr-wdI52o-ZFYhAejLFkuHjSdNivCzemU',
    authDomain: 'courso-f1025.firebaseapp.com',
    projectId: 'courso-f1025',
    storageBucket: 'courso-f1025.appspot.com',
    messagingSenderId: '391115610498',
    appId: '1:391115610498:web:bf06f109607e253bc9579b',
    databaseURL: 'https://courso-f1025-default-rtdb.europe-west1.firebasedatabase.app',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // handle on firebase db
  const db = firebase.database();

  // get elements
  const message = document.getElementById('message');
  const write = document.getElementById('write');
  const read = document.getElementById('read');
  const status = document.getElementById('status');
  console.log(status);
  // write
  write.addEventListener('click', e => {
    console.log('write');
    const messages = db.ref('/messages');

    // simple id - ok for example, do not use in production
    const id = new Date().getTime();
    console.log(id);
    // write to db
    messages
      .child(id)
      .set({ message: message.value })
      .then(function () {
        console.log(status);
        status.innerHTML = 'Wrote to DB!';
      });
  });

  // read
  read.addEventListener('click', e => {
    status.innerHTML = '';
    const messages = db.ref('messages');

    messages.once('value').then(function (dataSnapshot) {
      var data = dataSnapshot.val();
      var keys = Object.keys(data);

      keys.forEach(function (key) {
        console.log(data[key]);
        status.innerHTML += JSON.stringify(data[key]) + '<br>';
      });
    });
  });
})();
