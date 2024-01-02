exports.offer_list = (req, res) => {
    Offer.find({})
    .sort({timestamp: -1})
    .exec((err, list_offers) => {
        if(err) return err;

        res.json(list_offers);
    });
}

exports.offer_create = (req, res) => {

}

exports.offer_get = (req, res) => {
    Offer.findById(req.params.id)
    .exec((err, offer_result) => {
        if(offer_result == null) res.status(404).res.json({ error: 'Page not found' });
        if(err) return err;
        res.json(offer_result);
    });
}

/* Allowed to update: status if the user is the seller and is_withdrawn is false
is_withdrawn if the user is the buyer
*/
exports.offer_put = (req, res) => {

}
