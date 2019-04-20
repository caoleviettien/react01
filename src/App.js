import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';

class App extends Component {
  render() {
    return (
      <div className="vd2">
           <TopMenu/>
           <Header/>

           <div className="container">
              <div className="row pt-5">
                   <Content tieude="Cach su dung props bang class" vitri1="order-lg-2" anh="img/01.jpg" trichdan="A simple, one page website template for quickly building one page websites using Bootstrap 4"/>
                   <Content tieude="Tin Tuc So 2" anh="img/02.jpg" trichdan="Fixed top navigation menu Header with repeating background image (editable in the CSS)
                            Responsive content sections with images and text"/>
                   <Content tieude="Tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="Want more Bootstrap themes & templates?
                            Subscribe to get updated when new Bootstrap related products arrive!"/>

                   <Content tieude="Cach su dung props bang class" vitri1="order-lg-2" anh="img/01.jpg" trichdan="A simple, one page website template for quickly building one page websites using Bootstrap 4"/>
                   <Content tieude="Tin Tuc So 2" anh="img/02.jpg" trichdan="Fixed top navigation menu Header with repeating background image (editable in the CSS)
                            Responsive content sections with images and text"/>
                   <Content tieude="Tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="Want more Bootstrap themes & templates?
                            Subscribe to get updated when new Bootstrap related products arrive!"/>

                   <Content tieude="Cach su dung props bang class" vitri1="order-lg-2" anh="img/01.jpg" trichdan="A simple, one page website template for quickly building one page websites using Bootstrap 4"/>
                   <Content tieude="Tin Tuc So 2" anh="img/02.jpg" trichdan="Fixed top navigation menu Header with repeating background image (editable in the CSS)
                            Responsive content sections with images and text"/>
                   <Content tieude="Tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="Want more Bootstrap themes & templates?
                            Subscribe to get updated when new Bootstrap related products arrive!"/>

                   <Content tieude="Cach su dung props bang class" vitri1="order-lg-2" anh="img/01.jpg" trichdan="A simple, one page website template for quickly building one page websites using Bootstrap 4"/>
                   <Content tieude="Tin Tuc So 2" anh="img/02.jpg" trichdan="Fixed top navigation menu Header with repeating background image (editable in the CSS)
                            Responsive content sections with images and text"/>
                   <Content tieude="Tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="Want more Bootstrap themes & templates?
                            Subscribe to get updated when new Bootstrap related products arrive!"/>
              </div>
           </div>
          
      </div>
    );
  }
}

export default App;