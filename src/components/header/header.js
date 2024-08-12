// import { loadSignUp } from '../signup/signup.js';
export function loadHeader() {

  $('header').load('src/components/header/header.html nav', function() {
   
    $('.hamburger-icon').on('click',(e)=>{
      e.stopPropagation();

      $('.hamburger-bg').removeClass('hidden');
      setTimeout(()=>$('.hamburger-menu').removeClass('translate-x-full'),1);
      $('body').addClass('overflow-hidden');
      

      $('.hamburger-close').removeClass('hidden').addClass('flex');
      $('.hamburger-icon').addClass('hidden').removeClass('flex');
    });
    $('.hamburger-close').on('click',(e)=>{
      e.stopPropagation();

      setTimeout(()=>$('.hamburger-bg').addClass('hidden'),500);
      $('.hamburger-menu').addClass('translate-x-full');
      $('body').removeClass('overflow-hidden');
      $('.hamburger-icon').removeClass('hidden').addClass('flex');
      $('.hamburger-close').addClass('hidden').removeClass('flex');
    });
    $('.hamburger-bg').on('click',(e)=>
    {
      if(!$(e.target).closest('.hamburger-menu').length ){
        $('.hamburger-menu').toggleClass('translate-x-full');
        setTimeout(()=>$('.hamburger-bg').addClass('hidden'),500);
        $('body').removeClass('overflow-hidden');
        $('.hamburger-icon').removeClass('hidden').addClass('flex');
        $('.hamburger-close').addClass('hidden').removeClass('flex');
      }
    }
    );
  });


}
