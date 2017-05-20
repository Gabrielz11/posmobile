# Trabalho - Aplicativos Híbridos - 2ª Avaliação




| Ponto        | Situação  | Observação |
| --------------:| -----:| ------:|
| 1.0 localStorage       |Feito  | Salva a última tela que o usuário abriu, assim quando o aplicativo for aberto novamente carrega a ultima tela aberta.|
|1.5 acelerometro    |Feito| Ao sacudir o celular, o aplicativo fecha |
| 1.5 geolocation       |Feito| Ao abrir o aplicativo carrega localização atual do usuário e mostra no google maps |
| 1.5 maps      |Feito|ao clicar no contato mostrar a sua localização no google maps |
| 1.5 contatos  |Feito| |
| 2.0 Camera     | Feito | No menu lateral em "Status" tem a opção de gravar um vídeo|
| 1.0 Media      | Feito |Na tela "Status" reproduz automaticamente o vídeo gravado |
| 2.0 http  |   Feito | No menu lateral em Agenda Online |



### Plataforma testada

Android
Chrome


### Para rodar o projeto tem que ser
 
npm install

ionic platform add android

ionic plugin add cordova-plugin-geolocation

ionic plugin add cordova-plugin-contacts

ionic plugin add cordova-plugin-media-capture


No windows
 Para android 6.X
 cordova platform update android@6.2.1


### Comandos utilizados

  npm install

  ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyC205HyDuhR1JcWfsZdJajFsxpoiZH_91E"
  
  npm install @types/google-maps --save
  
  ionic plugin add cordova-plugin-geolocation
  
  npm install --save @ionic-native/geolocation
  
  ionic plugin add cordova-plugin-contacts
  
  npm install --save @ionic-native/contacts

  ionic plugin add --save cordova-plugin-device-motion

  npm install --save @ionic-native/device-motion
  
  ionic platform add android
  
  
  ionic plugin add cordova-plugin-media-capture  
  npm install --save @ionic-native/media-capture
  npm install --save @ionic-native/camera
  







