function changeaboutme()
{
    const aboutmeText=["STUDENT." ,"LEARNER.", "TECH-ENTUSIAST."];
    const typingSpeed=100;
    const eraseSpeed=50;
    const pauseTime=1200;
    const aboutMeElement=document.querySelector('.about-me');
   
    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function type() {
        const currentText=aboutmeText[textIndex];
        if(!isDeleting && charIndex < currentText.length){
            aboutMeElement.textContent+=currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        else if(isDeleting  && charIndex>0){
            aboutMeElement.textContent=currentText.substring(0, charIndex-1);
            charIndex--;
            setTimeout(type, eraseSpeed);}
        
    else{
        isDeleting = !isDeleting;
        if(!isDeleting){
            textIndex= (textIndex+1) % aboutmeText.length;}
            setTimeout(type, pauseTime);       
    }  
}
    type();
    
}
changeaboutme();