exports.product_list = (req, res) => {

}

exports.product_create = (req, res) => {
    
}

exports.product_get = (req, res) => {
    
}

/* Only can edit if the logged in user is the seller.
They can edit is_available, categories at any time. [If an offer is accepted, automatically change is_available to false]
Name, description, price can be edited only if no offers are accepted. last_edited will be changed to the current date if any of these are changed. 
*/
exports.product_put = (req, res) => {
    
}

//Only allow seller to delete if there's no offers yet. Instead flag as archived if there are offers present. 
exports.product_delete = (req, res) => {
    
}