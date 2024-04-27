import React, { useState } from "react";
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
import Navbar from "./Nav";

const Products = () => {
    const district = [
        "Ariyalur",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kanchipuram",
        "Kanyakumari",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Salem",
        "Sivaganga",
        "Thanjavur",
        "Theni",
        "Thoothukudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tiruppur",
        "Tiruvallur",
        "Tiruvannamalai",
        "Tiruvarur",
        "Vellore",
        "Viluppuram",
        "Virudhunagar",
    ];
    const vegetables = [
        "carrot",
        "broccoli",
        "spinach",
        "lettuce",
        "cucumber",
        "tomato",
        "potato",
        "onion",
        "bell pepper",
        "cabbage",
        "zucchini",
        "eggplant",
        "green beans",
        "radish",
        "sweet potato",
    ];
    const fruits = [
        "apple",
        "banana",
        "orange",
        "strawberry",
        "grape",
        "watermelon",
        "pineapple",
        "kiwi",
        "mango",
        "pear",
        "peach",
        "plum",
        "blueberry",
        "raspberry",
        "cherry",
    ];

    const [productType, setProductType] = useState(fruits);

    return (
        <div>
            <Navbar />
            <div className="product-filter">
                <div className="filter-section">
                    <h2>District</h2>
                    <select name="" id="">
                        <option value="deafult">Select a district</option>
                        {district.map((element, index) => {
                            return (
                                <option value={element} key={index}>
                                    {element}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <hr />
                <div className="filter-section">
                    <h2>Products</h2>
                    <div className="product-choice">
                        <input
                            type="radio"
                            name="productType"
                            onClick={(e) => {
                                setProductType(fruits);
                            }}
                        />{" "}
                        <label htmlFor="">Fruits</label>
                        <input
                            type="radio"
                            name="productType"
                            onClick={(e) => {
                                setProductType(vegetables);
                            }}
                        />
                        <label htmlFor="Vegetables">Vegetables</label>
                    </div>
                    <div className="product-list">
                        {productType.map((element, index) => {
                            return (
                                <div className="item">
                                    <input type="checkbox" id={index} />
                                    <label>{element}</label>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <hr />
                <div className="filter-section">
                    <select>
                        <option value="default" className="price-panel">
                            Select Price range
                        </option>
                        <option value="">100-200</option>
                        <option value="">200-300</option>
                        <option value="">300-400</option>
                        <option value="">400 and above</option>
                    </select>
                </div>
            </div>
            <div className="products">
                <h2>Products</h2>
                <div className="product">
                    <h3>Vegetables</h3>
                    <div className="product-container">
                        <div className="product-item">
                            <img src={spinach} alt="" />
                            <div className="info">
                                <h3>Spinach </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>
                            <h2>Price : 10/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={tomato} alt="" />
                            <div className="info">
                                <h3>Tomato </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 30/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={cabbage} alt="" />
                            <div className="info">
                                <h3>Cabbage </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                        id="cabbage"
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 30/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={beet} alt="" />
                            <div className="info">
                                <h3>Beetroot </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 50/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={carrot} alt="" />
                            <div className="info">
                                <h3>Carrot </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 40/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={potato} alt="" />
                            <div className="info">
                                <h3>Potato </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 25/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={chilli} alt="" />
                            <div className="info">
                                <h3>Chilli </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 5/kg</h2>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <h3>Fruits</h3>
                    <div className="product-container">
                        <div className="product-item">
                            <img src={apple} alt="" />
                            <div className="info">
                                <h3>Apple </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>
                            <h2>Price : 10/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={orange} alt="" />
                            <div className="info">
                                <h3>Orange </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 30/kg</h2>
                        </div>
                        <div className="product-item">
                            <img src={guava} alt="" />
                            <div className="info">
                                <h3>Guava </h3>
                                <div className="buttons">
                                    <button>-</button>
                                    <input
                                        type="number"
                                        value={1}
                                        min={1}
                                        max={10}
                                        id="cabbage"
                                    />
                                    <button>+</button>
                                </div>
                            </div>{" "}
                            <h2>Price : 30/kg</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
