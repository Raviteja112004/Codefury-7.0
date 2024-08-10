document.addEventListener('DOMContentLoaded', () => {
  
  const slides = document.querySelectorAll('.slide');
            let n = slides.length;
            console.log(n);
            
            let counter= 0;
          
            slides.forEach(
              (slide,index)=>{
                  slide.style.left= `${index*100}%`;
                 
              }
            )
            
            const slideimg= ()=>{
              slides.forEach(
                  (slide)=>{
                      slide.style.transform=translateX(-`${counter*100}%`);
                      slide.style.transition='1.5s';
                  }
              )
            }
            
          const nextSlide =()=>{ 
            console.log('function called');
            
            counter= (counter+1)%n;
            slideimg();
          }
          const prevSlide= ()=>{
            if(counter !=0){
              counter--;
            }
              slideimg();
          }
          const next = document.querySelector('.next').addEventListener('click',nextSlide);
          

          let prev = document.querySelector('.prev').addEventListener('click',prevSlide);
        //  slides.forEach(
        //  (slide)=>{
        //   slide.addEventListener('click',()=>{
            
           
        //     nextSlide();
        //   })
        //  }
        //  )
  //       const btn = document.querySelector('.next')
  // btn.addEventListener('dblclick',()=>{
  //   let body = document.querySelectorAll('*');  
  //   body.style.backgroundColor='white';
    
  // })
        // for autoScrolling
        let setId = setInterval(() => {
          nextSlide();
        }, 3000);
        slides.forEach(
          (slide)=>{
            slide.addEventListener('mouseover',()=>{
              clearTimeout(setId);
            })
          }
        )
        slides.forEach(
          (slide)=>{
            slide.addEventListener('mouseout',()=>{
              setId= setInterval(() => {
                nextSlide();
              }, 3000);
            })
          }
        )

      });

      