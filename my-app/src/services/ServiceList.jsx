import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import customizationImg from '../assets/images/customization.png'
import guideImg from '../assets/images/guide.png'

const serviceData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "jnvjldsfglkdsfhhl'dl",
    },
    {
        imgUrl: guideImg,
        title: "Best guide",
        desc: "jnvjldsfglkdsfhhl'dl",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "jnvjldsfglkdsfhhl'dl",
    }
]


const ServiceList = () => {
    return (
        <>
        {serviceData.map((item,index) => (
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
        </>
    )
};

export default ServiceList;