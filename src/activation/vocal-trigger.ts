import Artyom from 'artyom.js';
import { onMounted, onUnmounted, ref } from 'vue';

export function useVocalTrigger(initiallyClosed: boolean, openCommands: String[], closedCommands: String[]) {
  const isClosed = ref(initiallyClosed);
  
  let artyom: Artyom;

  onMounted(() => {
    artyom = new Artyom();

    var commands = [
      {
        indexes: openCommands,
        action:function() {
          isClosed.value = false;
        }
      }, {
        indexes: closedCommands,
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
              debug: true
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