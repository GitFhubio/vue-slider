Vue.config.devtools = true;

const app = new Vue( {
  el:'#root',
  data:{
    imgs:[{
      url:'https://www.smartweek.it/wpsw/wp-content/uploads/2018/06/Rustin-%E2%80%98Rust%E2%80%99-Cohle.jpg',
      alt:'immagine di Rust'
    },
    {
      url:'https://www.fortementein.com/wp-content/uploads/2020/08/peaky-blinders-stagione-6-cast.jpg',
      alt:'immagine di Peaky Blinders'
    },
    {
      url:'https://media.vanityfair.com/photos/548836d748de990f76760c31/16:9/w_1280,c_limit/jaz-jesus-sons-of-anarchy-finale.jpg',
      alt:'immagine di Jax'
    },
    {
      url:'https://i.pinimg.com/originals/50/99/90/5099903a144248f0558d1fda1c14c418.jpg',
      alt:'immagine di Saul'
    }],
    indexPhoto: 0

  }
  ,
  methods:{
   next: function(){
     this.indexPhoto+=1;
     if (this.indexPhoto==this.imgs.length){
       this.indexPhoto=0;
     }
   },
     prev: function(){
       this.indexPhoto-=1;
       if (this.indexPhoto<0){
         this.indexPhoto=this.imgs.length-1;
       }
   }


  }
});
