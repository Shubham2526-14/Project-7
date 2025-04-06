





const lenis = new Lenis({
    smooth: 10,
    direction: 'vertical',
    gestureOrientation: 'vertical',
    smoothTouch: 5,
    touchMultiplier: 2,
    });
    
    function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  
  








