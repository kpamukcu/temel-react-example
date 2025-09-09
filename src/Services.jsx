import React from 'react'
import './Services.css'

function Services({ baslik, desc, gorsel }) {
    return (
        <>
            <div className="col-4 text-center">
                <div className="card">
                    <img src={gorsel} alt={baslik} style={{width:'100%'}} />
                    <div className="card-body">
                        <h2>{baslik}</h2>
                        <p> {desc} </p>
                        <a href="" className="btn btn-primary">Daha Fazla Bilgi</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services