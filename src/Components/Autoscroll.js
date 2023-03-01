function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}
  
async function Autoscroll() {
	await delay(2000);

    if (window.scrollY === 0) {
        for (let i=0; i < 50; i++){

            async function AutoscrollInner() {
                await delay(Math.pow(i, 1.3) * 10); // Slow smooth scrolling.

                    if (window.scrollY < i ) {

                        window.scroll({
                            top: i,
                            behavior: 'smooth'
                        });   
                    }
            }
            AutoscrollInner();
        }
        
    }
	
}
  
Autoscroll();

