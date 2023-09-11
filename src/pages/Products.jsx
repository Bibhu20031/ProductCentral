import React from 'react'
import { NavLink,Link} from 'react-router-dom';
import '../index.css';
import Watch1 from './Watch4.jpg';
import Watch2 from './Watch5.jpeg';
import WatchSE from './Watch SE.png';
import Buds2Pro from './Buds2 Pro.png';
import Airpods from './AirpodsMax.jpeg';
import './data.js';


const Products = () => {
       return (
            
                <div className="container content ">
                       <div className="column">
                       <div className="row-lg-4" >
                    

                       <div className="card">
                           <div className="img-wrap">
                             <img src={Watch1} alt="" className='picture'/>
                           </div>
                        <div className="card-body">
                         <h5 className="card-title">Watch 4</h5>
                           <p className="card-text">Description here</p>
                           <div className="d-flex justify-content-between align-items-center">
                            <span className='price'>Rs. 10000</span>
                            <NavLink to="Error">Buy here!</NavLink>
                        </div>
                         </div>
                        </div>

                            <div className="card">
                            <div className="img-wrap">
                            <img src={Watch2} alt="" className='picture'/>
                            </div>
                             <div className="card-body">
                               <h5 className="card-title">Watch 5</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam sapiente id animi. Dolorum, accusantium? Maxime natus dolor maiores voluptatem repellendus perferendis quae, dicta hic adipisci? Magnam, est nostrum iste placeat nam fugit sequi.</p>
                            <div className="d-flex justify-content-between align-items-center">
                             <span className='price'>Rs. 30000</span>
                              <NavLink to="Error">Buy here!</NavLink>
                            </div>
                            </div>
                            </div>

                            <div className="card">
                            <div className="img-wrap">
                            <img src={WatchSE} alt="" className='picture'/>
                            </div>
                             <div className="card-body">
                               <h5 className="card-title">Watch SE</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam sapiente id animi. Dolorum, accusantium? Maxime natus dolor maiores voluptatem repellendus perferendis quae, dicta hic adipisci? Magnam, est nostrum iste placeat nam fugit sequi.</p>
                            <div className="d-flex justify-content-between align-items-center">
                             <span className='price'>Rs. 100000</span>
                              <NavLink to="Error">Buy here!</NavLink>
                            </div>
                            </div>
                            </div>


                            <div className="card">
                            <div className="img-wrap">
                            <img src={Buds2Pro} alt="" className='picture'/>
                            </div>
                             <div className="card-body">
                               <h5 className="card-title">Galaxy Buds 2 Pro</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam sapiente id animi. Dolorum, accusantium? Maxime natus dolor maiores voluptatem repellendus perferendis quae, dicta hic adipisci? Magnam, est nostrum iste placeat nam fugit sequi.</p>
                            <div className="d-flex justify-content-between align-items-center">
                             <span className='price'>Rs. 100000</span>
                              <NavLink to="Error">Buy here!</NavLink>
                            </div>
                            </div>
                            </div>


                            <div className="card">
                            <div className="img-wrap">
                            <img src={Airpods} alt="" className='picture'/>
                            </div>
                             <div className="card-body">
                               <h5 className="card-title">Airpods Max</h5>
                             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam sapiente id animi. Dolorum, accusantium? Maxime natus dolor maiores voluptatem repellendus perferendis quae, dicta hic adipisci? Magnam, est nostrum iste placeat nam fugit sequi.</p>
                            <div className="d-flex justify-content-between align-items-center">
                             <span className='price'>Rs. 60000</span>
                              <NavLink to="Error">Buy here!</NavLink>
                            </div>
                            </div>
                            </div>


                    </div>

                    </div>
                   

            </div>
        
            )
  }

export default Products;