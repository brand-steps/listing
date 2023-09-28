import React from "react";
import Sidebar from "./Sidebar";
import "./product.css";
import Usercard from "../Cards/Usercard";
import Productcard from "../Cards/productcard";





const Dashbord = () => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <>




    <div className=" bg-white h-full">
      <div className="flex w-full bg-white h-auto ">
        <Sidebar />

        <div className="bg-white w-4/5">
          <input
            type="text"
            placeholder="Search Here "
            className="pl-4  asjdbasdvijasd"
          />
          <div className='flex  justify-evenly flex-wrap my-4'>
      <div style={containerStyle}>
          <div className="user&adminPhoto">
            <div className="admininfo"> 
              <h6>Salman</h6>
            <h6>Male</h6>
            <h6>23</h6>
            </div>

            <div
              style={{  }}
              className="flex  items-center justify-between adminImage"
            >
              <img
                className="AdminPhoto"
                src={
                  "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
                }
                alt="Admin"
              />
            </div>
          </div>

      </div>
      <div >
        <Usercard/>
      </div>
      <div >
<Productcard/>
      </div>

    </div>


          <div>
            <h3 className="jasdhiavjf">Admin </h3>
          </div>
          <div class="col-md-12 flex-container">
            {/* <!-- flex-item --> */}
            <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-violet">
                    <i class="fa fa-pie-chart fa-3x tile-icon icon-white"></i>
                    <h4>Flexible Spending Account</h4>
                  </div>
                  <div class="card-back bg-violet">
                    <p class="title">Lorem ipsum dolor sit amet</p>
                    <p class="desc">
                      Pellentesque magna nunc, fermentum nec ipsum non,
                      consequat scelerisque dui.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>
            {/* <!-- /flex-item --> */}

            {/* <!-- flex-item --> */}
            <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-magenta">
                    <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
                    <h4>HSA Total Balance</h4>
                  </div>
                  <div class="card-back bg-magenta">
                    <p class="title">Praesent varius mi sem</p>
                    <p class="desc">
                      Cras posuere consequat nisl, ut rhoncus odio finibus sit
                      amet. Sed consectetur dapibus.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>
            {/* <!-- /flex-item --> */}

            {/* <!-- flex-item --> */}
            <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-blue">
                    <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
                    <h4>Your Paid Time Off Balance</h4>
                  </div>
                  <div class="card-back bg-blue">
                    <p class="title">Vestibulum eget sem malesuada</p>
                    <p class="desc">
                      Etiam imperdiet ullamcorper dolor sit amet molestie.
                      Quisque eu nibh in ligula.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>
            {/* <!-- /flex-item --> */}

            {/* <!-- flex-item --> */}
            <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-green">
                    <i class="fa fa-bar-chart fa-3x tile-icon icon-white"></i>
                    <h4>Savings Plan Total Balance</h4>
                  </div>
                  <div class="card-back bg-green">
                    <p class="title">Curabitur elementum augue</p>
                    <p class="desc">
                      Nullam porttitor dui quis commodo mattis. Fusce posuere,
                      nisl id ultrices pellentesque.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>
            {/* <!-- flex-item --> */}
          </div>

          <div className="flex  ml-8  justify-center	">
            <div class="donut-chart-block block22  ml-4">
              <h2 class="titular   text-white">OS AUDIENCE STATS</h2>
              <div class="donut-chart">
                <div id="porcion1" class="recorte">
                  <div class="quesito ios" data-rel="21"></div>
                </div>
                <div id="porcion2" class="recorte">
                  <div class="quesito mac" data-rel="39"></div>
                </div>
                <div id="porcion3" class="recorte">
                  <div class="quesito win" data-rel="31"></div>
                </div>
                <div id="porcionFin" class="recorte">
                  <div class="quesito linux" data-rel="9"></div>
                </div>
                {/* <!-- FIN AÑADIDO GRÄFICO --> */}
                <p class="center-date">
                  JUNE
                  <br />
                  <span class="scnd-font-color">2023</span>
                </p>
              </div>
              <ul class="os-percentages horizontal-list">
                <li>
                  <p class="ios os scnd-font-color">iOS</p>
                  <p class="os-percentage">
                    21<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p class="mac os scnd-font-color">Mac</p>
                  <p class="os-percentage">
                    39<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p class="linux os scnd-font-color">Linux</p>
                  <p class="os-percentage">
                    9<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p class="win os scnd-font-color">Win</p>
                  <p class="os-percentage">
                    31<sup>%</sup>
                  </p>
                </li>
              </ul>
            </div>
            {/* <!-- LINE CHART BLOCK (LEFT-CONTAINER) --> */}
            <div class="line-chart-block block22">
              <div class="line-chart">
                <div class="grafico">
                  <ul class="eje-y">
                    <li data-ejeY="30"></li>
                    <li data-ejeY="20"></li>
                    <li data-ejeY="10"></li>
                    <li data-ejeY="0"></li>
                  </ul>
                  <ul class="eje-x">
                    <li>Apr</li>
                    <li>May</li>
                    <li>Jun</li>
                  </ul>
                  <span data-valor="25">
                    <span data-valor="8">
                      <span data-valor="13">
                        <span data-valor="5">
                          <span data-valor="23">
                            <span data-valor="12">
                              <span data-valor="15"></span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <ul class="time-lenght horizontal-list">
                <li>
                  <a class="time-lenght-btn" href="#14">
                    Week
                  </a>
                </li>
                <li>
                  <a class="time-lenght-btn" href="#15">
                    Month
                  </a>
                </li>
                <li>
                  <a class="time-lenght-btn" href="#16">
                    Year
                  </a>
                </li>
              </ul>
              <ul class="month-data clear">
                <li>
                  <p>
                    APR<span class="scnd-font-color"> 2023</span>
                  </p>
                  <p>
                    <span class="entypo-plus increment"> </span>21<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p>
                    MAY<span class="scnd-font-color"> 2023</span>
                  </p>
                  <p>
                    <span class="entypo-plus increment"> </span>48<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p>
                    JUN<span class="scnd-font-color"> 2023</span>
                  </p>
                  <p>
                    <span class="entypo-plus increment"> </span>35<sup>%</sup>
                  </p>
                </li>
              </ul>
            </div>

            <div class="bar-chart-block block22">
              <h2 class="titular  text-white">
                By Country <span>*1000</span>
              </h2>
              <div class="grafico bar-chart">
                <ul class="eje-y">
                  <li data-ejeY="60"></li>
                  <li data-ejeY="45"></li>
                  <li data-ejeY="30"></li>
                  <li data-ejeY="15"></li>
                  <li data-ejeY="0"></li>
                </ul>
                <ul class="eje-x">
                  <li data-ejeX="37">
                    <i>España</i>
                  </li>
                  <li data-ejeX="56">
                    <i>Portugal</i>
                  </li>
                  <li data-ejeX="25">
                    <i>Italia</i>
                  </li>
                  <li data-ejeX="18">
                    <i>Grecia</i>
                  </li>
                  <li data-ejeX="45">
                    <i>EE.UU</i>
                  </li>
                  <li data-ejeX="50">
                    <i>México</i>
                  </li>
                  <li data-ejeX="33">
                    <i>Chile</i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashbord;
