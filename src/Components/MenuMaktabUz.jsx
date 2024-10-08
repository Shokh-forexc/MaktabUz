import './MenuMaktabUz.css'
import Slider from './Slider'
export const MenuMaktab = () =>{
    return(
        <div className="Container">
            <div className="NoImage">
                 <div className="LogIn">
                    <h2>Visit classroom</h2>
                    <h5>For student, teacher or parent</h5>
                    <button><i className='bi bi-person-fill'></i><input type="text" /></button>
                    <button><i class="bi bi-person-fill-lock"></i><input type="password" /></button>
                    <button className='SignUp'>Sign up</button>
                    <h5 className='Password'>Forgot password?</h5>
                 </div>
            </div>
            <div className="Lesson">
                <div className="TextLesson AAAA">
                    <h1>Videodarsliklar kutubxonasi</h1>
                    <h3>Elektron videodarsliklarning eng katta to'plami</h3>
                </div>
                <div className="Lessons">
                    <div className="DivLessons">
                        <div className='Class'>
                            <h1 className='Align'><h1>1</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h1><h1>2</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h1><h1>3</h1> Class</h1>
                        </div>
                    </div>
                    <div className="DivLessons">
                        <div className='Class'>
                            <h1><h1>4</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h1><h1>5</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h1><h1>6</h1> Class</h1>
                        </div>
                    </div>
                    <div className="DivLessons">
                        <div className='Class'>
                            <h1><h1>7</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h1><h1>8</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h1><h1>9</h1> Class</h1>
                        </div>
                    </div>
                    <div className="DivLessons">
                        <div className='Class'>
                            <h1><h1>10</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h1><h1>11</h1> Class</h1>
                        </div>
                        <div className='Class'>
                            <h2>Additional subjects</h2>
                        </div>
                    </div>
                    <div className="DivLessons">
                        <div className="Class">
                        <h3>STEAM video coursers</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MaktabUz">
                <div className="dark-overly">
                    <div className="School">
                        <h1>What is Maktab.uz?</h1>
                        <div className="AbMaktabUz">
                         <button><i class="bi bi-exclamation"></i></button>
                            <h6>Maktab.uz - is an advanced digital education technology that meets international standards and provides high-quality continuous distance <br /> learning for schoolchildren. The platform provides teachers as well as parents with a wide range of opportunities ranging from monitoring the <br /> academic performance of students to getting familiar with the content of the topics.</h6>
                        </div>
                        <div className="Family">
                            <img src="https://maktab.uz/img/35f6252d8c2a02e9108d937518ad7f7e.png" alt="" />
                        <div className="Text">
                            <h3 style={{color:'black',fontWeight:'bold'}}>New way of distance learning at home</h3>
                            <h5>The Maktab.uz platform offers video lessons that cover topics included in the <br /> curriculum in an interesting way. The platform also offers the opportunity to <br /> learn modern knowledge and skills such as programming, graphic design, <br /> robotics, effective communication, leadership, and more.</h5>
                        </div>
                        </div>
                        <div className="LessonsM">
                            <div className="Text">
                                <h3 style={{color:'black'}}>Have you missed lessons? No worries</h3>
                                <h5>You can watch the video lessons on the Maktab.uz platform anytime and <br /> anywhere you like. In addition, the lessons will be followed by test questions to <br /> help you master the topics, which will help you strengthen your knowledge and skills.</h5>
                            </div>
                            <img src="https://maktab.uz/img/264a6dec144473c6abd7f14df97d828e.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Gradiend">
                <h1 className='Adv'>Advantages</h1>
              <div className="WhiteCards">
                <img src="https://maktab.uz/img/092424ebe03cc1c764d15dcae28c0f1b.png" alt="" />
                <h5 style={{color:'black'}}>It is very easy to register!</h5>
                <h6>To use the platform, you need to <br /> register on the website. It does not <br /> take long. Fill in the form using the <br /> registration button and become a <br /> platform user in minutes!</h6>
              </div>
              <div className="WhiteCards">
                <img src="https://maktab.uz/img/6a11724df9be893998cf4b6051b7c8cd.png" alt="" />
                <h5 style={{color:'black'}}>Courses you have been <br /> waiting for!</h5>
                <h6>Our video lessons include the fields you want to study. In addition to the curriculum, we have also focused on modern knowledge. There is more to come. Maktab.uz will be further enriched with new video lessons.</h6>
              </div>
              <div className="WhiteCards">
                <img src="https://maktab.uz/img/eeb279ebec5825e5a6638470698f3c0c.png" alt="" /> 
                <h5>Interesting and useful <br /> content!</h5> 
                <h6>Along with interactive video lessons provided by international partners, Maktab.uz also includes informative <br /> videos developed in collaboration with <br /> local experts and organizations. Most importantly, this useful content will not <br /> leave anyone indifferent.</h6>                             
              </div>
            </div>
            <div className="Usesfull">
                <h1>Foydali resurslar</h1>
                <Slider className="Slider"/>
            </div>
        </div>
    )
}