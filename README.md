# ionic2
<h2>QR Code</h2>
<p>Install lib <code>npm install ng2-qrcode --save</code></p>
<p>Create file <code>ng2-qrcode.ts</code></p>
<p>Import component on <code>app.module.ts</code> on <code>declarations, entryComponents</code></p>
<p>Ref.: https://www.npmjs.com/package/ng2-qrcode</p>

<h2>GeoLib</h2>
<p>Install lib <code>npm install geolib --save</code></p>
<p>Add reference on declarations.d.ts <code>declare module 'geolib';</code></p>
<p>Ref.: https://github.com/manuelbieh/Geolib</p>

<h2>Firebase</h2>
<p>Install lib <code>npm i lodash firebase --save</code></p>
<p>Install types <code>npm install @types/lodash --save</code></p>
<p>Add type on tsconfig.json <code>"types": ["firebase"]</code></p>
<p>Add strict on rollup.config.js <code>useStrict: false</code></p>
<p>Import lib to use <code>import firebase from 'firebase';</code></p>
<p>Ref.: http://alexmgrant.github.io/ionic/firebase/rc0/lodash/2016/10/06/ionic-rc0-&-firebase.html </p>
