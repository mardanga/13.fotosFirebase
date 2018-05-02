// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAhHSMmIdESr48hMPQDzJzo7u1JTXzm-j4',
    authDomain: 'taxicloud-eaec6.firebaseapp.com',
    databaseURL: 'https://taxicloud-eaec6.firebaseio.com',
    projectId: 'taxicloud-eaec6',
    storageBucket: 'taxicloud-eaec6.appspot.com',
    messagingSenderId: '103258168982'
  }
};
