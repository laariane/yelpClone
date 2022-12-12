const apiKey =  "dU4YYF3CppXqX1-oVh9JxdfRdM_bnIUEvzFCdrAEYZnmAsPdmaJNnFJjcJ6QEUfXTbVMfEOk7Ll3FH3JSRRNJfRd1qTzYiD17T-IhFv8Ku-ebMP0HONlYdOf2miSY3Yx"

export const Yelp = {
    search(term , location , sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers : {Authorization : `Bearer ${apiKey}`}})
        .then(response =>response.json())
        .then(jsonResonse=> {
            if (jsonResonse.businesses){
                return jsonResonse.businesses.map(business => {
                    id : business.id;
                    imageSrc : business.imageUrl;
                    name : business.name;
                    address : business.address;
                    city :business.city;
                    state : business.state;
                    zipCode :business.zipCode;
                    category : business.category;
                    rating : business.rating;
                    reviewCount : business.re


                }  )
            }
        }   );
    },
}
