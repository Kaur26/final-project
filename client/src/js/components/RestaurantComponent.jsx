import React from 'react';


export default class RestaurantComponent extends React.Component {

render() {

console.log("Inside Restaurant");
var restaurant={
  "id": "16774318",
  "name": "Otto Enoteca & Pizzeria",
  "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
  "location": {
    "address": "1 5th Avenue, New York, NY 10003",
    "locality": "Greenwich Village",
    "city": "New York City",
    "latitude": "40.732013",
    "longitude": "-73.996155",
    "zipcode": "10003",
    "country_id": "216"
  },
  "average_cost_for_two": "60",
  "price_range": "2",
  "currency": "$",
  "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
  "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
  "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
  "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
  "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
  "user_rating": {
    "aggregate_rating": "3.7",
    "rating_text": "Very Good",
    "rating_color": "5BA829",
    "votes": "1046"
  }
  }


return(
<article className="jumbotron">
<div className="row" id="main">

<div className="col-4"><img src="http://stuffpoint.com/pizza-hut/image/17355-pizza-hut-piza.jpg" alt="image" width="20%" height="100px"/>
</div>

<div className="col-8">
      <div  className="col-8">
      <text><h3><strong><a href="#" >{restaurant.name}</a></strong></h3></text>
      <h4><strong>{restaurant.location.locality}</strong></h4>
      <h5><strong>{restaurant.location.address}</strong></h5>
      </div>
</div>
</div>


<div className="row">
<div className="col-4 pull-left">
<p></p>
<text>CUSINES : </text>
<p> </p>
<text> COST FOR TWO: </text>
</div>

<div className="col-8">
      <div  className="col-8">
      <p></p>
      <text>South Indian, North-Indian, Chinese, Continental </text>
      <p></p>
      <text> 550 Rupees</text>
      </div>
</div>



</div>
</article>

)
}

}
