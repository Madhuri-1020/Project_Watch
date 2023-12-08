import React from 'react';
import vrimage from '../Assets/product-2.jpg';
// import '../CSS/VRproducts.css'

export default function VRproducts() {
    const vr_glass = [
        {   
            vr_name : 'Oculus Quest',
            vr_desp : 'All in one gaming headest with light weight, flexible design',
            vr_price: 599,
        },
        {   
            vr_name : 'Oculus Quest',
            vr_desp : 'All in one gaming headest with light weight, flexible design',
            vr_price: 499,
        },
        {   
            vr_name : 'Oculus Quest',
            vr_desp : 'All in one gaming headest with light weight, flexible design',
            vr_price: 399,
        },

    ];

  return (
    <div>
        <div class="vr-box-vr" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)'}} >
                {
                 vr_glass.map((item)=>{
                    return(
                        <div className='container'>
                            <div class="row gx-3" style={{width:'330px'}}>
                                <div class="col" >
                                    <img src={vrimage} alt='vr_range' style={{width:'300px'}}/>
                                </div>
                                <div class="col p-2 mt-5 bg-light" >
                                    <h4>{item.vr_name}</h4>
                                    <p>{item.vr_desp}</p>
                                    <span className='text-danger fw-bold me-2'>$ {item.vr_price}</span>
                                    <button className='float-lg-end  float-sm-end btn btn-primary'><i class="fa-solid fa-cart-plus"></i> Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
        </div>
    </div>
  )
}