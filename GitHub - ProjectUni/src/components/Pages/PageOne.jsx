import React from 'react'


const NavBar = () => {
  return (
    
    <>        
      <header>
              
      <div class='container' id='nav-container'>
        <nav class='navbar navbar-expand-lg fixed-top'>
          <a class='navbar-brand' href= "#">
           <img src='img\pixilart-drawing 1.png' alt='Uni'/>
            </a>
              
            <button class='navbar-toggler' type='button' data-toggle='collapse' data-target= "#navbar-links" aria aria-controls='navbar-links' aria-expanded='false' aria-label='toggle navigation'>
              <span class='navbar-toggle-icon'></span>

            </button>
            <div class='collapse navbar-collapse justify-content-end' id='navbar-links'>
              <div class='navbar-nav'>
                <a class='nav-item nav-link' id='home-menu'>Planetas</a>
                <a class='nav-item nav-link' id='about-menu'>História</a>
                <a class='nav-item nav-link' id='services-menu'>Curiosidades</a>
                <a class='nav-item nav-link' id='nasa-menu'>NASA</a>
              </div>
            </div>

           </nav>
        
            
        </div>

      </header>
        
    
    </>
  );
}

const Principal = () =>{
  return(
    <main>
      
      <div class='container-fluid'>
        <div id='mainSlider' class='carousel slide' data-ride='carousel'>
          <ol class='carousel-indicators'>
            <li data-target="#mainSlider" data-slide-to ="0" class='active'>

            </li>
          </ol>
        </div>
      </div>
    </main>    
  )
}

const PageOne = () => {
  return(
    <>
    <NavBar/>
      <Principal/>
    </>
    
  );
}
export default PageOne;