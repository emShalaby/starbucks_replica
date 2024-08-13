export function loadStart(){
  
  $('.getting-started').load('src/components/start/start.html'),function(){
    console.log('hi');
  };
}