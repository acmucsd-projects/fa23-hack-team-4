"use client"

import 'bootstrap/dist/css/bootstrap.css'
import stuff from './page.module.css'
import {useEffect} from 'react'

export default function sideBar() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    
    return (
        <main className={stuff.main}>
            <div>
                <SideBarBoxes/>
            </div>
        </main>
    )
}

function SideBarBoxes() {
    return (
        <div class="btn-group-vertical">
            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Price Range</button>

                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Not Pricey</a>
                    <a class="dropdown-item" href="#">Pricey</a>
                </div>
            </div>
            
            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Verified Seller</button>

                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Yes</a>
                    <a class="dropdown-item" href="#">No</a>
                </div>
            </div>

            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Date Listed</button>

                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Now</a>
                    <a class="dropdown-item" href="#">Then</a>
                </div>
            </div>

            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Rating</button>

                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">0</a>
                    <a class="dropdown-item" href="#">5</a>
                </div>
            </div>

            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Size</button>

                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">S</a>
                    <a class="dropdown-item" href="#">M</a>
                    <a class="dropdown-item" href="#">L</a>
                    <a class="dropdown-item" href="#">XL</a>
                </div>
            </div>
        </div>
    )
}