import App from './App';
import './index.scss';

const app = new App(); 

const nextButton = document.querySelector('.btn-next'); 
const prevButton = document.querySelector('.btn-prev'); 
const steps = document.querySelectorAll('step'); 
const form_steps = document.querySelectorAll('step'); 

let active = 1;  

nextButton.addEventListener('click', () => { 
    active++ ; 

    if (active > steps.length){ 
        active = length
    }  
      updateProgress() ;
}) 

prevButton.addEventListener('click', ()  => { 
   active--; 
   if (active < 1){ 
       active = 1;
   } 
   updateProgress();
})

const updateProgress = () => { 
    console.log('steps.length =>' + steps.length); 
    console.log(active =>'' + active ); 

    steps.forEach((step, i) => { 
        if(i == (active-1)) { 
            steps.classList.add('active'); 
            form_steps[1].classList.add('active'); 
            console.log('i =>' +1);
        }else { 
            step.classList.remove('active');
            form_steps[i].classList.remove('active');
        }
    });
}   

if(active == 1) { 
    prevButton.disabled = true; 
}else if (active === steps.length){ 
    nextButton.disabled = true; 
}else { 
    prevButton.disabled = false; 
    
}