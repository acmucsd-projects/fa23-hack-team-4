'use client';

export function CurrentUserBtn() {
    async function clickEvent(e) {
        const res = await fetch("http://localhost:5000/me", {
            method: "GET",
            credentials : "include",
            headers:{
                "accepts":"application/json"
            }
        });
        const currentUser = await res.json();
        console.log(currentUser);
    }

    return(
        <button onClick={clickEvent}>Get Currently logged in User</button>
    );
} 

export function GetProductsBtn() {
    async function clickEvent(e) {
        const res = await fetch("http://localhost:5000/products", {
            method: "GET",
            credentials : "include",
            headers:{
                "accepts":"application/json"
            }
        });
        const products = await res.json();
        console.log(products);
    }

    return(
        <button onClick={clickEvent}>Get Products</button>
    );
} 

export function GetOffersBtn() {
    async function clickEvent(e) {
        const res = await fetch("http://localhost:5000/offers", {
            method: "GET",
            credentials : "include",
            headers:{
                "accepts":"application/json"
            }
        });
        const offers = await res.json();
        console.log(offers);
    }

    return(
        <button onClick={clickEvent}>Get Offers</button>
    );
} 

function Category() {
    const categories = [ 'Clothing', 'T-Shirts', 'Hoodies & Sweatshirts', 'Tops', 'Pants & Shorts', 'Hats', 'Home', 'Furniture', 'Room Decor', 'Kitchenware' , 'Entertainment', 'Books', 'Sporting Goods', 'Games', 'Other' , 'School Supplies', 'Writing Utensils', 'Notebooks', 'Textbooks', 'Lab Supplies' , 'Miscellaneous', 'Drinkware', 'Backpacks & Totes', 'Other' ];
    return (
        <select id="product-categories" name="product-categories" multiple>
            {categories.map(function(cat) {
                return (
                    <option value={cat}> &nbsp;{cat}&nbsp;</option>

                )
            })}
        </select>
    )
}

export function CreateProductBtn() {
    //encType needed in this form because of file images; other forms will not need this. 
    return(
        <form id='create-product' action="http://localhost:5000/products" method="post" encType="multipart/form-data" target="dummyframe">
            <label htmlFor="product-name">Name: </label>
            <input type="text" id="product-name" name="product-name" maxLength="70" required/>

            <label htmlFor="product-description">Description:</label>
            <textarea id="product-description" name="product-description" maxLength="1000" required></textarea>

            <label htmlFor="product-price">Price: </label>
            <input type="number" id="product-price" name="product-price" min="0" required/>

            <label htmlFor="product-image[]">Image(s): </label>
            <input type="file" id="product-image[]" name="product-image[]" multiple accept='.jpeg, .png, .jpg' required/>

            <label htmlFor="product-categories">Categories:</label>
            <Category />

            <label htmlFor="product-is_on_campus">On campus availability: </label>
            <select id="product-is_on_campus" name="product-is_on_campus">
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <button type='submit'>Create Product</button>
            <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
        </form>
    );
} 

export function CreateOfferBtn() {
    const PRODUCT_ID = "659fc267e701cf5093110b7d"

    return(
        <form id='create-offer' action="http://localhost:5000/offers" method="post">
            <label htmlFor="offer-comment">Comment: </label>
            <input type="text" id="offer-comment" name="offer-comment" maxLength="250" required/>

            <label htmlFor="offer-price">Price: </label>
            <input type="number" id="offer-price" name="offer-price" min="0" step=".01" required/>

            <input type="product" id="offer-product" name="offer-product" value={PRODUCT_ID} style={{display: "none"}} required/>

            <button type='submit'>Create Offer</button>
            <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
        </form>
    );
} 

export function UpdateProductBtn() {
    const PRODUCT_ID = "";

    return(
        <form id='update-product' action={"http://localhost:5000/products/" + PRODUCT_ID} method="post" encType="multipart/form-data" target="dummyframe">
            <label htmlFor="product-name">Name: </label>
            <input type="text" id="product-name" name="product-name" maxLength="70"/>

            <label htmlFor="product-description">Description:</label>
            <textarea id="product-description" name="product-description" maxLength="1000"></textarea>

            <label htmlFor="product-price">Price: </label>
            <input type="number" id="product-price" name="product-price" min="0" step=".01"/>

            <label htmlFor="product-image[]">Image(s): </label>
            <input type="file" id="product-image[]" name="product-image[]" multiple accept='.jpeg, .png, .jpg'/>

            <label htmlFor="product-is_available">Available: </label>
            <select id="product-is_available" name="product-is_available">
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <label htmlFor="product-is_on_campus">On campus availability: </label>
            <select id="product-is_on_campus" name="product-is_on_campus">
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <label htmlFor="product-categories" name="product-categories">Categories:</label>
            <Category />

            <button type='submit'>Update Product</button>
            <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
        </form>
    );
} 

export function UpdateOfferBtn() {
    const OFFER_ID = "659fc5bb84d434547872cbd3";

    return(
        <form id='update-offer' action={"http://localhost:5000/offers/" + OFFER_ID} method="post">
            <label htmlFor="offer-comment">Comment: </label>
            <input type="text" id="offer-comment" name="offer-comment" maxLength="250"/>

            <label htmlFor="offer-price">Price: </label>
            <input type="number" id="offer-price" name="offer-price" min="0" step=".01"/>

            <label htmlFor="offer-is_accepted">Accepted: </label>
            <select id="offer-is_accepted" name="offer-is_accepted">
                <option value={''}></option>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <label htmlFor="offer-is_withdrawn">Withdrawn: </label>
            <select id="offer-is_withdrawn" name="offer-is_withdrawn">
                <option value={''}></option>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <button type='submit'>Update Offer</button>
            <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
        </form>
    );
} 

export function DeleteProductBtn() {
    const PRODUCT_ID = "65a07af4e5ca4c0753607c46";

    async function clickEvent(e) {
        const res = await fetch("http://localhost:5000/products/" + PRODUCT_ID + "/delete", {
            method: "POST",
            credentials : "include",
            headers:{
                "accepts":"text/plain"
            }
        });
        const resJSON = await res.json();
        console.log(resJSON);
    }

    return(
        <button onClick={clickEvent}>Delete product</button>
    );
} 