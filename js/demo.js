

$(document).ready(function() {


  //alert("I'm in");
   // JavaScript enabled; initiate some of the CSS for this
   $("#intro h1").css({
      bottom: '-1.5em',
      opacity: 1
   });
   $("#box").css({
      background: '#22346F',
      'border-color': '#333',
      height: 0,
      width: 0
   });
   $("p").css({
      opacity: 0,
      position: 'relative',
      left: '-3em'
   });
   $("p.b, p.copyright").css({
      left: '3em'
   });
   
   
  
   window.myRunloop = jQuery.runloop();
   

   myRunloop.addKey('10%', function(){ $("#box").animate( { width:'35.6em', paddingLeft:'2em', paddingRight:'2em' }, { duration:1000, queue:false } ) });

   myRunloop.addMap({
      '15%': function(){ $("#intro h1").animate( { bottom:'0' }, { duration:1000, queue:false } )},
      '30%': function(){

         myRunloop.pause();
         
    
         var name = "Dwarak";
         
       
         $("#name").text(name);
         $("#drowning").text($("#intro h1").text());
         

         myRunloop.play();
      },
      '40%': function(){ $("#box").animate({ height:'34.6em' }, { duration:1500, queue:false } ) },
      '50%': function(){ 
         $("#intro h1").animate({ bottom:'-2.3em' }, { duration:1000, queue:false } );
         $("#box h1").animate({ top:0 }, { duration:1000, queue:false } );
      },
      '55%': function(){  $("p.a").animate( { opacity:1, left:0 }, { duration:500, queue:false } );  },
      '70%': function(){  $("p.b").animate( { opacity:1, left:0 }, { duration:500, queue:false } ); },
      '85%': function(){  $("p.c").animate( { opacity:1, left:0 }, { duration:500, queue:false } );  },
      '100%': function(){ $("p.copyright").animate( { opacity:1, left:0 }, { duration:650, queue:false } ); }
   });


   myRunloop.addKey('50%', function(){ if(window.console) console.log('First call at 50%'); });
   myRunloop.addKey('50%', function(){ if(window.console) console.log('Second call at 50%'); });


   function optionalCallback(){
      if(window.console) console.log('Runloop done!');
   };
   
   // Start playing the runloop, in this case with a duration of 10s.
   // If the duration is omitted and no runloop was playing, it'll default to 500ms.
   myRunloop.play(10000, optionalCallback);

});






