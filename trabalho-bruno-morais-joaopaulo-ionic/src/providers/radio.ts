export class RadioPlayer {
  url:string;
  stream:any;
  promise:any;

 constructor() {
   this.url = "http://wz3.dnip.com.br/aycomau1/aycomau1.stream/playlist.m3u8";
   this.stream = new Audio(this.url);
 };

 play() {
   this.stream.play();
   this.promise = new Promise((resolve,reject) => {
     this.stream.addEventListener('playing', () => {
       resolve(true);
     });

     this.stream.addEventListener('error', () => {
       reject(false);
     });
   });

  return this.promise;
};

pause() {
  this.stream.pause();
};

}
