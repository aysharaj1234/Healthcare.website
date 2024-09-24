import React, { useEffect } from 'react';
import WOW from 'wow.js';

const Health = () => {
  useEffect(() => {
    new WOW().init();
  }, []);


  return (
    <div>
      {/* navbar */}

      <nav className="navbar navbar-expand-lg bg-body ">
  <div className="container-fluid ms-2">
  <img src='https://i0.wp.com/ayumetrix.com/wp-content/uploads/2024/07/At-Home-Testing-Blog.png?fit=1080%2C1080&ssl=1'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item dropdown mt-5 ms-5 ">
          <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight:"500",fontSize:"18px"}}>
           Providers
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">My account</a></li>
            <li><a className="dropdown-item" href="#">Get started</a></li>
            <li><a className="dropdown-item" href="#">Request test  kits</a></li>
            <li><a className="dropdown-item" href="#"> How to collect sample</a></li>
            <li><a className="dropdown-item" href="#">Faq</a></li>
            <li><a className="dropdown-item" href="#">Blogs</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mt-5 ms-5">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"005581",fontWeight:"500",fontSize:"18px"}}>
          Patients
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">How to collect sample</a></li>
            <li><a className="dropdown-item" href="#">Blogs</a></li>
            <li><a className="dropdown-item" href="#">Faq</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mt-5 ms-5">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"005581",fontWeight:"500",fontSize:"18px"}}>
          Tests
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Harmones & wellness</a></li>
            <li><a className="dropdown-item" href="#">Gentetics</a></li>
            <li><a className="dropdown-item" href="#">Infectious Diseases</a></li>
            <li><a className="dropdown-item" href="#">Food & Nutrition</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown mt-5 ms-5">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"005581",fontWeight:"500",fontSize:"18px"}}>
          Company

          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">About us </a></li>
            <li><a className="dropdown-item" href="#">Health Plans</a></li>
            <li><a className="dropdown-item" href="#">International Business</a></li>
            <li><a className="dropdown-item" href="#">Careers</a></li>
            <li><a className="dropdown-item" href="#">Research</a></li>
            <li><a className="dropdown-item" href="#">News & Blogs</a></li>
          </ul>
        </li>
      
      
        <li className="nav-item dropdown mt-5 ms-5">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"005581",fontWeight:"500",fontSize:"18px"}}>
       
          Contact
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">contact us </a></li>
          </ul>
        </li>
      </ul>
      <div class="imgg mt-3 me-5" role="img">
    <img src="https://www.shutterstock.com/image-vector/one-health-infographic-diagram-three-260nw-1611366112.jpg" style={{borderRadius:"100%", height:"100px",width:"100px"}}/>
      </div>
    </div>
  </div>
</nav>
{/* section-1 */}
<div className="section-1 mt-3">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <h3 className="con animate__animated wow animate__fadeInLeft ms-3" style={{ marginTop: "100px" }}>TAKE CONTROL OF YOUR HEALTH!</h3>
        <p className="con animate__animated wow  animate__fadeInLeft  ms-3">A Whole New Approach to Enhanced Immune System Function – Disease Prevention & Weight Loss Based On Hormone Balance & Optimization</p>
      </div>
      <div className="col-lg-6 col-md-12 d-flex justify-content-center">
        <div className="images animate__animated wow  animate__fadeInRight ">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsfensjmPi4D0EUK9YCPSLPuzZA1F83MeLeRp2WDDApJvhfhe_Pyzur9-k8EBdUMl_c4&usqp=CAU"/> 
        </div>
      </div>
    </div>
  </div>
</div>

{/* section-2 */}
    <div className='section-2'>
  <div className='container'>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4  animate__animated wow animate__zoomIn">
      <div class="col">
        <div class="card ">
          <img src="https://static.thenounproject.com/png/188633-200.png" class="card-img-top" alt="Diet Image"/>
          <div class="card-body">
            <h5 class="card-title">Diet</h5>
            <p class="card-text">Our initial 90-day flash diet plan is designed to accelerate fat loss from your body in combination with our unique program.</p>
            <a href="#" class="btn btn-primary " style={{height:"55px"}}>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/185/185618.png" class="card-img-top" alt="Exercise Image"/>
          <div class="card-body">
            <h5 class="card-title">Exercise</h5>
            <p class="card-text">The most important part of our patent-pending program are our unique Hi-5 FIT TM (Fast Interval Training) Exercise Modules.</p>
            <a href="#" class="btn btn-primary"  style={{height:"55px"}}>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/256/36/36447.png" class="card-img-top" alt="Lifestyle Image"/>
          <div class="card-body">
            <h5 class="card-title">Lifestyle</h5>
            <p class="card-text">The most important lifestyle change you can make is ensuring that you get the proper amount of quality sleep every night.</p>
            <a href="#" class="btn btn-primary"  style={{height:"55px"}}>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1330/1330585.png" class="card-img-top" alt="Supplements Image"/>
          <div class="card-body">
            <h5 class="card-title">Supplements</h5>
            <p class="card-text">Supplements are available without a prescription and usually come in pill, powder or liquid form. Common supplements include vitamins. </p>
            <a href="#" class="btn btn-primary"  style={{height:"55px"}}>Learn More</a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* section-3 */}
<div className='section-3'>
  <div className='container'>
    <div className='row'>
      <header>
        <h1 className='cont '>Why AYUMETRIX</h1>
      </header>
      <div className='col-lg-7 col-md-12'>
        <img src='https://i0.wp.com/ayumetrix.com/wp-content/uploads/2021/11/machine-circle.png?resize=600%2C600&ssl=1' alt='At Home Collection' className='im  animate__animated wow animate__fadeInLeft'/>
        <h2 className='con  animate__animated wow animate__fadeInLeft'>Simple and Easy Collection</h2>
        <p className='con  animate__animated wow animate__fadeInLeft'>Samples can be easily collected in your own time and privacy using our innovative at home collection devices</p>
        <img src='https://i0.wp.com/ayumetrix.com/wp-content/uploads/2021/11/website-circle-results.png?resize=600%2C600&ssl=1' alt='Cost Saving Tests' className='im  animate__animated wow animate__fadeInLeft'/>
        <h2  className='con  animate__animated wow animate__fadeInLeft'>Cost Saving Tests</h2>
        <p  className='con  animate__animated wow  animate__fadeInLeft'>Healthcare does not have to be expensive. We bring you the most affordable at-home lab tests.</p>
      </div>
      <div className='col-lg-5 col-md-12'>
        <h2 className='con  animate__animated wow  animate__fadeInRight'>Innovative Technologies</h2>
        <p className='con  animate__animated wow  animate__fadeInRight'>Advanced and latest technologies like LC-MS/MS, ICP-MS, ELISA, Chemiluminescence, RT-PCR, DNA Sequencing, Robotics and much more employed to provide the most accurate testing</p>
        <img src='https://i0.wp.com/ayumetrix.com/wp-content/uploads/2021/11/website-circle.png?resize=600%2C600&ssl=1' alt='Comprehensive Test Reports' className='im  animate__animated wow animate__fadeInRight'/>
        <h2 className='con  animate__animated wow animate__fadeInRight' >Comprehensive Test Reports</h2>
        <p  className='con  animate__animated  wow animate__fadeInRight'>Beautifully crafted with colorful graphics make it easy to understand and interpret test results.</p>
        <img src='https://i0.wp.com/ayumetrix.com/wp-content/uploads/2021/11/website-circle-save-money.png?resize=600%2C600&ssl=1' alt='Save Money'  className='im  animate__animated wow  animate__fadeInRight'/>
      </div>
   

<div className='div-1'>
<div class="card text-center mt-5 animate__heartBeat" style={{fontWeight:"500",color:"#004e73"}}>
  <div class="card-header fw-3">
  Let us help you get started!
  </div>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Begin Here</a>
  </div>
</div>
    </div>
  </div>
</div>
</div>

{/* section-4 */}
<div className='section-4'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 text-center'>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbrvC0JWJ3QBQKp4-GYXayXkjxv1xhN4eMA&s' 
          className='img-fluid' 
          alt='Growth Hormone Optimization' 
        />

        <h2 className='content  animate__animated wow  animate__fadeIn mt-5'>GROWTH-HORMONE OPTIMIZATION PROTOCOL</h2>
        <h5 className='test  animate__animated wow  animate__fadeIn mt-3'>You will burn the fat & keep it off! Get your energy & youthful appearance back. Check out our starter kits & supplements!</h5>
      
        <div className="btu">
    <button type="button" className="btn btn-outline-secondary mt-3 btn-responsive">Get Started</button>
</div>
       
        
      </div>
    </div>
  </div>
</div>
{/* section-5 */}
<div className='section-5 mt-5'>
  <div className='container'>
  <div className='row'>
    <header>
    <h1 className="tesst  responsive-heading" style={{ color: "white"}}>
    Updates from AYUMETRIX
</h1>
    </header>
   
      <div className='col-lg-12'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5  animate__animated wow  animate__zoomIn">
          <div className="col">
            <div className="card h-100">
              <img src="https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/189436/951847/heroimage0.106296001681421744.jpg" className="card-img-top" alt="Men’s Health: Testosterone and Chronic Conditions" />
              <div className="card-body">
                <h5 className="card-title">Women’s Health: Testosterone and Chronic Conditions</h5>
                <p className="card-text">Women’sMen’s Health: Testosterone and Chronic Conditions It is well known in the healthcare field that men’s health concerns are frequently overlooked. For years society has.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://t3.ftcdn.net/jpg/03/26/89/14/360_F_326891421_GQhL4WEFNZdiEc63XwNBmUaLgJ3gWCfd.jpg" className="card-img-top" alt="At Home Testing: The Future of Medicine" />
              <div className="card-body">
                <h5 className="card-title">At Home Testing: The Future of Medicine</h5>
                <p className="card-text">At Home Testing: The Future of Medicine The medical world is forever evolving, with new medications, new surgical techniques, new monitoring devices, and more streamlined.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://i0.wp.com/www.larabriden.com/wp-content/uploads/histamine-perimenopause.png?resize=320%2C220&ssl=1" className="card-img-top" alt="Estrogen vs Progesterone Dominance" />
              <div className="card-body">
                <h5 className="card-title">Estrogen vs Progesterone Dominance</h5>
                <p className="card-text">Estrogen vs Progesterone Dominance The female reproductive hormones tend to be extremely complicated with a lot of factors contributing to relative imbalances within the body.</p>
              </div>
            </div>
          </div>

          <div className='btnn'>
          <button type="button" class="btn btn-outline-primary" style={{color:"white",marginBottom:"15px"}}>For more details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* section-6 */}
<div className='section-6'>
  <div className='container'>
    <div className='row align-items-center'>
      <div className='col-lg-6 text-center mb-4 mb-lg-0'>
        <h3 style={{color:"#005581",marginTop:"20px"}}>Take that first step and connect with us. Leave the rest on us</h3>
        <p className='para fs-5 animate__animated wow  animate__fadeInLeft' style={{color:"gray"}}>Let us show you how simple it is to be healthy and well</p>
        <h3 style={{color:"#005581",marginTop:"180px"}}>AYUMETRIX is Global</h3>
     <p className='para fs-5 animate__animated wow  animate__fadeInLeft' style={{color:"gray"}}>We receive samples from all around the world. Served 101 countries and counting</p>
      </div>
      <div className='col-lg-6 text-center'>
        <img className='img-fluid animate__animated wow animate__backInRight mt-4 ms-5' src='https://levelmedicine.org.au/blog/wp-content/uploads/2023/11/97.jpg' alt="Health Image" />
        <img  className="imagess animate__animated wow animate__backInRight mt-5" src='https://upload.wikimedia.org/wikipedia/commons/8/82/World_map_showing_nominal_GDP_of_countries_for_the_year_2017_according_to_the_IMF.png'/>
      </div>
    </div>
  </div>
</div>

{/* footer */}
<footer class="footer">
  <div class="footer-container">
    <div class="footer-links">
      <h4 className='tes ms-4'>Contact Us</h4>
      <ul>
        <li><a href="#home">17387 SW 63rd Ave, Lake Oswego, Oregon 97035.​</a></li>
        <li><a href="#Email">Info@ayumetrix.com</a></li>
        <li><a href="#contact">(503)344-1344</a></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h4>Business Hours</h4>
      <p>Monday to Friday: 08:00 AM - 5:00 pm</p>
      <p>sunday: Closed</p>
      <p>Saturday: Closed</p>
    </div>
    <div class="footer-social">
      <h4>Service</h4>
      <div class="social-icons mt-3">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/256/2504/2504839.png" alt="Twitter"/></a>
        <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="Twitter"/></a>
        <a href="#"><img src="https://cdn-icons-png.freepik.com/256/15707/15707737.png?semt=ais_hybrid" alt="Facebook"/></a>
        <a href="#"><img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="Instagram"/></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy;  2024 AYUMETRIX LLC. All rights reserved</p>
  </div>
</footer>



  </div>

  )
}

export default Health;