import Navbar from "./Nav";
import bg1 from "../../assets/images/farm.jpeg";
import bg2 from "../../assets/images/basket.jpeg";
import bg3 from "../../assets/images/farmer.jpeg";
import bg4 from "../../assets/images/purchase.jpeg";
import arrow from "../../assets/images/arrow.png";
import apple from "../../assets/images/home-img/apple.jpg";
import orange from "../../assets/images/home-img/orange.jpg";
import guava from "../../assets/images/home-img/guava.jpg";
import spinach from "../../assets/images/home-img/spinach.jpg";
import carrot from "../../assets/images/home-img/carrot.jpg";
import beet from "../../assets/images/home-img/beet.jpg";
import potato from "../../assets/images/home-img/potato.jpg";
import tomato from "../../assets/images/home-img/tomato.jpg";
import chilli from "../../assets/images/home-img/chilli.jpg";
import cabbage from "../../assets/images/home-img/cabbage.jpg";
import { useState } from "react";

const Home = () => {
    const username = document.cookie.split("; ")[0].split("=")[1];
    const [index, setIndex] = useState(0);
    const card = [
        {
            img: bg1,
            contentHeading: "STRAIGHT FROM FARM",
            content: "content here",
        },
        {
            img: bg2,
            contentHeading: "FRESH TO YOUR TABLE",
            content: "content here",
        },
        {
            img: bg3,
            contentHeading: "MOTIVATING ECONOMY'S BACKBONE",
            content: "content here",
        },
        {
            img: bg4,
            contentHeading: "ELIMINATING MIDDLE MAN",
            content: "content here",
        },
    ];

    const moveLeft = () => {
        if (index <= 0) {
            setIndex(3);
        } else {
            setIndex(index - 1);
        }
    };

    const moveRight = () => {
        if (index >= 3) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    setInterval(() => {
        moveRight();
    }, 3000);
    return (
        <div style={{ zIndex: 1 }}>
            <Navbar />
            <div className="welcome">
                Welcome &nbsp;<span>{username}</span> !
            </div>
            <div className="cards">
                <div className="left" onClick={moveLeft}>
                    <img src={arrow} alt="" />
                </div>
                <div className="center">
                    <div
                        className="content"
                        style={{
                            backgroundImage: `url(${card[index].img})`,
                        }}
                    >
                        <h2>{card[index].contentHeading}</h2>
                        <h4>{card[index].content}</h4>
                    </div>
                </div>
                <div className="right" onClick={moveRight}>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="items">
                <h2 style={{ marginLeft: "20px" }}>Products</h2>
                <div className="item">
                    <div>
                        <img src={apple} alt="APPLE" />
                        <img src={orange} alt="ORANGE" />
                        <img src={guava} alt="GUAVA" />
                    </div>
                    <div>
                        <img src={carrot} alt="CARROT" />
                        <img src={spinach} alt="SPINACH" />
                        <img src={beet} alt="BEETROOT" />
                    </div>
                    <div>
                        <img src={potato} alt="POTATO" />
                        <img src={tomato} alt="TOMATO" />
                        <img src={chilli} alt="CHILLI" />
                    </div>
                    <div>
                        <img src={cabbage} alt="CABBAGE" />
                    </div>
                </div>

                <a href="">Explore More ..</a>
            </div>
        </div>
    );
};

export default Home;
