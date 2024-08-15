export function loadFooter(){
  $('.footer').load('src/components/footer/footer.html',function(){
    $('.about-us-h2').on('click',()=>{
      if($('.about-us-ul').hasClass('hidden')) {
        $('.about-us-ul').removeClass('hidden');
        $('.about-us-ul').addClass('flex');
      }
      else {
        $('.about-us-ul').addClass('hidden');
        $('.about-us-ul').removeClass('flex');
        console.log('hi');
      };
    });
    $('.careers-h2').on('click',()=>{
      if($('.careers-ul').hasClass('hidden')) {
        $('.careers-ul').removeClass('hidden');
        $('.careers-ul').addClass('flex');
      }
      else {
        $('.careers-ul').addClass('hidden');
        $('.careers-ul').removeClass('flex');
        
      };
    });
    $('.social-h2').on('click',()=>{
      if($('.social-ul').hasClass('hidden')) {
        $('.social-ul').removeClass('hidden');
        $('.social-ul').addClass('flex');
      }
      else {
        $('.social-ul').addClass('hidden');
        $('.social-ul').removeClass('flex');

      };
    });
    $('.business-h2').on('click',()=>{
      if($('.business-ul').hasClass('hidden')) {
        $('.business-ul').removeClass('hidden');
        $('.business-ul').addClass('flex');
      }
      else {
        $('.business-ul').addClass('hidden');
        $('.business-ul').removeClass('flex');
        
      };
    });
    $('.order-h2').on('click',()=>{
      if($('.order-ul').hasClass('hidden')) {
        $('.order-ul').removeClass('hidden');
        $('.order-ul').addClass('flex');
      }
      else {
        $('.order-ul').addClass('hidden');
        $('.order-ul').removeClass('flex');
        
      };
    });
  });}