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

export function CreateProductBtn() {
    //encType needed in this form because of file images; other forms will not need this. 
    return(
        <form id='create-product' action="http://localhost:5000/products" method="post" encType="multipart/form-data">
            <label htmlFor="product-name">Name: </label>
            <input type="text" id="product-name" name="product-name" maxLength="70" required/>

            <label htmlFor="product-description">Description:</label>
            <textarea id="product-description" name="product-description" maxLength="1000" required></textarea>

            <label htmlFor="product-price">Price: </label>
            <input type="number" id="product-price" name="product-price" min="0" required/>

            <label htmlFor="product-image">Image(s): </label>
            <input type="file" id="product-image[]" name="product-image[]" multiple accept='.jpeg, .png, .jpg' required/>

            <button type='submit'>Create Product</button>
        </form>
    );
} 

export function UpdateProductBtn() {
    //For an example demo, replace the string in action with 'http://localhost:5000/products/' + knownIdOfProduct
    return(
        <form id='update-product' action="http://localhost:5000/products/6598ff088768544a365a67a8" method="post">
            <label htmlFor="product-name">Name: </label>
            <input type="text" id="product-name" name="product-name" maxLength="70"/>

            <label htmlFor="product-description">Description:</label>
            <textarea id="product-description" name="product-description" maxLength="1000"></textarea>

            <label htmlFor="product-price">Price: </label>
            <input type="number" id="product-price" name="product-price" min="0"/>

            <label htmlFor="product-image">Image(s): </label>
            <input type="file" id="product-image[]" name="product-image[]" multiple accept='.jpeg, .png, .jpg'/>

            <label htmlFor="product-is_available">Available: </label>
            <input type="checkbox" id="product-is_available" name="product-is_available" />

            <button type='submit'>Update Product</button>
        </form>
    );
} 

export function DeleteProductBtn() {
    //For an example demo, replace the string in action with 'http://localhost:5000/products/' + knownIdOfProduct + '/delete'
    async function clickEvent(e) {
        const res = await fetch("http://localhost:5000/products/65991371151728540cb58471/delete", {
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