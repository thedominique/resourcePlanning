import React, { Component } from 'react'
import './startPage.css'

import Tent from '../images/Tent.jpeg'
import Hike1 from '../images/fish.jpeg'
import Hike3 from '../images/ten.jpeg'
import Hike8 from '../images/hike8.jpeg'
import Hike9 from '../images/hike9.jpeg'
import Hike7 from '../images/hike7.jpeg'
import Hike10 from '../images/hike10.jpeg'
import Hike6 from '../images/lux.jpeg'


import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import FooterComponent from '../components/static/FooterComponent';

import { WithRouter } from 'react-router-dom'


var sectionStyle = {

    width: "100%",
    height: "400px",
    backgroundImage: `url(${Tent})`,
    "margin-bottom": "3%"
};


class StartPage extends Component {

    render() {
        return (
            <>
                <Carousel id="carousel">
                    <Carousel.Item id="item1">
                        <img id="c-image"
                            className="d-block w-100"
                            src={Hike7}
                            alt="First slide"

                        />
                        <div className = "blackoverlay"></div>

                        <Carousel.Caption>
                            <h1>Welcome to the Garage</h1>
                            <p>Maximizing the the use of your gear and bringing you closer to nature</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="c-image"
                            className="d-block w-100"
                            src={Hike8}
                            alt="First slide"

                        />
                        <div className = "blackoverlay"></div>
                        <Carousel.Caption>
                        <h3>Start your adventure today</h3>
                            <p>With the Garage you get access to top quality outdoor sports gear in a sustainable way</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="c-image"
                            className="d-block w-100"
                            src={Hike9}
                            alt="Second slide"

                        />
                            <div className = "blackoverlay"></div>
                        <Carousel.Caption>
                            <h3>Sustainability and comfort</h3>
                            <p>Sharing is caring. By renting second hand you contribute to a more sustainable product life cycle</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img id="c-image"
                            className="d-block w-100"
                            src={Hike10}
                            alt="Third slide"

                        />
                        <div className = "blackoverlay"></div>
                        <Carousel.Caption>
                            <h3>What are you waiting for?</h3>
                            <p>
                                The world is at your feet. You just have to take the first step and we'll be there to hold your hand
                    </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "hike6.jpg" }

                })}>
                    <div class="imgbox" > <img src={Hike6}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Camping delux <br></br> <span>Camping</span></h2> <br></br>
                        <div class="price">from $200</div>
                        <ul>
                            <li>3D</li>
                            <li>1W</li>
                            <li>1M</li>

                        </ul> <ul>
                            <p className="product-description">
                                For a long, relaxing campground stay, a snug little backpacking tent just won’t do. Don't worry. We hear you.
                            </p>
                        </ul>

                        <button class="btn btn-primary" >Book Now</button>
                    </div>
                </div>

                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "hike3.jpg" }

                })}>
                    <div class="imgbox"> <img src={Hike3}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Camping basics<br></br> <span>Camping</span></h2>
                        <div class="price">from $15</div>
                        <ul>
                            <li>1D</li>
                            <li>3D</li>
                            <li>1W</li>

                        </ul>
                        <ul >

                            <p className="product-description"> <br></br>
                                A successful camping trip starts with packing the right gear to help you brave the elements.
                        </p>
                        </ul>
                        <button class="btn btn-primary">Book Now</button>
                    </div>
                </div>


                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "hike1.jpg" }

                })}>
                    <div class="imgbox"> <img src={Hike1}></img> </div>
                    <div class="specifies">
                        <h2 class="product-title">Fishing starter kit <br></br> <span>Fishing</span></h2>
                        <div class="price">from $150</div>
                        <ul>
                            <li>1 D</li>
                            <li>3 D</li>
                            <li>1 W</li>

                        </ul>
                        <p className="product-description"> <br></br>
                            Carp Fishing Full Kit 3 tips Carbon Fiber Feeder Fishing Rod Carp Fishing Reel and Fishing Carrier Bag</p>

                        <button class="btn btn-primary" >Book Now</button>
                    </div>
                </div>


                {/* </div> */}

                {/* <Card id="card">
                            <Card.Img variant="top" src={Hike6} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card id="card">
                            <Card.Img variant="top" src={Hike6} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card id="card">
                            <Card.Img variant="top" src={Hike6} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card> */}





                {/* <div className="container">
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipitlaboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui inea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non-recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat…
        
            This is H. Rackham's translation as printed in the Loeb Classical Library edition with underlining added for the translation of the text found in the example of the Lorem ipsum[2]:
        
            [32] But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? [33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse.
            </div> */}


        


        <div class="blockquote-wrapper">
            <div class="blockquote">
                <h1>
                    <br></br>We put the world at your feet.
      
                </h1>
                <h4>- the Garage</h4>
                <br></br>
            </div>
        </div>

        <link href='https://fonts.googleapis.com/css?family=Josefin+Sans|Abril+Fatface' rel='stylesheet' type='text/css'/>

    <blockquote1>
        <p>
            We make great outdoor experiences accessible to everyone by building a community 
            of mindful adventurers who lend and borrow their gear in order 
            to create a more sustainable product life cycle for the love of our environment.
            </p>
            
                <cite1><a href="https://www.brucelawson.co.uk/2013/on-citing-quotations-again/">The Garage</a></cite1>
            
            <div1></div1>
    </blockquote1>
            </>

        );

    }


}

export default StartPage;