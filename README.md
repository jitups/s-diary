ionic start s-diary --type=angular // create ionic app

npm install firebase angularfire2 // install firebase

// do coding

ionic build // to build app locally

ionic serve // to run app locally

ionic cordova run browser // to run app locally with native plug-in

to create virtual device
C:\Android\android-sdk\tools\bin>avdmanager create avd -n test -k "system-images;android-28;google_apis_playstore;x86"

to run on virtual device
ionic cordova emulate android

ionic cordova  build --release android // to create apk

//to sign apk

keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk alias_name

cd C:\Program Files (x86)\Android\android-sdk\build-tools\28.0.3  

.\zipalign.exe -v 4 app-release-unsigned.apk s-diary.apk   

git init

git add .

git commit -am "first changes"

git config --global user.name "jitups"

git config --global user.password "XXXXX"

git remote add origin https://github.com/jitups/cordova-firebase.git

git remote set-url origin https://github.com/jitups/cordova-firebase.git

git push -f origin master

