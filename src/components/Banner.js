import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src="/images/phones.jpg" alt="Banner Slide 1" className='d-block w-100' width={600} height={460}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Tablets, Smartphones</h5>
                        <p>Best price available in market</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image src="/images/laptop.jpg" alt="Banner Slide 2" className='d-block w-100' width={600} height={460}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Laptops, Mac-Book, Accesories</h5>
                        <p>Best price available in market</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image src="/images/headphones.jpg" alt="Banner Slide 3" className='d-block w-100' width={600} height={460} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Headphones, Earphones, Gadgets</h5>
                        <p>Best price available in market</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image src="/images/cameras.jpg" alt="Banner Slide 4" className='d-block w-100' width={600} height={460} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Nikon, Canon</h5>
                        <p>Best price available in market</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner
