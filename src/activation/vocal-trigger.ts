import Artyom from 'artyom.js';
import { onMounted, onUnmounted, ref } from 'vue';

export function useVocalTrigger(initiallyClosed: boolean, openCommand: String, closedCommand: String) {
  const isClosed = ref(initiallyClosed)
  let artyom: Artyom;

  onMounted(() => {
    artyom = new Artyom();

    var commands = [
      {
        indexes:[openCommand],
        action:function() {
          isClosed.value = false;
        }
      }, {
        indexes:[closedCommand],
        action:function() {
          isClosed.value = true;
        }
      }
     ]
     
     artyom.addCommands(commands);
  
     function startContinuousArtyom(){
      artyom.fatality();
  
      setTimeout(function(){
           artyom.initialize({
              lang:"de-DE",
              continuous:true,
              listen:true, 
              speed:1,
          }).then(function(){
              console.log("Vocal Trigger setup");
          });
      },250);
    }
    startContinuousArtyom();
  })

  onUnmounted(() => {
    artyom.fatality();
  })

  return isClosed;
}