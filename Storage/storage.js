(function () {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: 'AIzaSyBr-wdI52o-ZFYhAejLFkuHjSdNivCzemU',
    authDomain: 'courso-f1025.firebaseapp.com',
    databaseURL: 'https://courso-f1025-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'courso-f1025',
    storageBucket: 'courso-f1025.appspot.com',
    messagingSenderId: '391115610498',
    appId: '1:391115610498:web:bf06f109607e253bc9579b',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create a root reference
  var storage = firebase.storage();
  var storageRef = storage.ref();

  // get elements
  const file = document.getElementById('file');
  const upload = document.getElementById('upload');
  const download = document.getElementById('download');
  const status = document.getElementById('status');
  const image = document.getElementById('image');

  // upload file
  upload.addEventListener('click', e => {
    // Create a file reference
    var ref = storageRef.child('globe');
    let photo = document.getElementById('file').files[0];

    // upload
    ref.put(photo).then(function (snapshot) {
      console.log('Uploaded a blob or file!');
      status.innerHTML = 'Uploaded blob or file!';
    });
  });

  // download file
  download.addEventListener('click', e => {
    // file reference
    var ref = storage.ref('globe');

    ref
      .getDownloadURL()
      .then(function (url) {
        // insert url into an <img> tag to "download"
        image.src = url;
        status.innerHTML = 'Downloaded blob or file!';
      })
      .catch(function (error) {
        console.log(error);
      });
  });
})();
