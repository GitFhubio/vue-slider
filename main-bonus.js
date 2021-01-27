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
    ,
    // classeActive: (index,indexPhoto)=> {
    //   if(index==indexPhoto){
    //     return 'active';
    //   }
    // },
    interval:0
  }
  ,
created() { // più corretto created
    this.loop();
  },
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
     },
       Active: function(index){
          this.indexPhoto=index;
       },

       classeActive: function(index,indexPhoto) {
         if(index==indexPhoto){
           return 'active';
         }
       },

      loop: function(){
        this.interval=setInterval(() => {
        this.next()}, 3000);
      },

      stopLoop:function(){
         clearInterval(this.interval);
      }
      }

});

// differenza mounted created?
// mounted (): viene eseguito prima di creare il componente
// created (): viene eseguito dopo aver creato il componente per il rendering
