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

export function CreatePostBtn() {
    return(
        <form id='create-product' action="http://localhost:5000/products" method="post" enctype="multipart/form-data">
            <label for="product-name">Name: </label>
            <input type="text" id="product-name" name="product-name" maxlength="70" required/>

            <label for="product-description">Description:</label>
            <textarea id="product-description" name="product-description" maxlength="1000" required></textarea>

            <label for="product-price">Price: </label>
            <input type="number" id="product-price" name="product-price" min="0" required/>

            <label for="product-image">Image(s): </label>
            <input type="file" id="product-image[]" name="product-image[]" multiple accept='.jpeg, .png, .jpg' required/>

            <button type='submit'>Create Product</button>
        </form>
    );
} 