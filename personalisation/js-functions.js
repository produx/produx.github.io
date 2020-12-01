



var displayResults = function(data){

  $.each(data.items, function(i, item) {
    if (requirements.length > 0) {
      var meetsNeeds;
      $.each(item.propertyFacilities, function(i, facilities) {
        var meetsNeeds = [];
        $.each(facilities, function(i, facility){
          var n = requirements.includes(facility[0].name)
          if (n){
            meetsNeeds.push(facility[0].hasIt)
          };
        });

        if (meetsNeeds.includes(false)){
          console.log (item.name +": hide")
        } else {
          console.log (item.name +": show")
          buildCard(item);
        }

      });
    } else {
      buildCard(item);
    }

  });

}
//<div class="row">
  //<div class="cell-1">Wifi included</div>
  //<div class="cell-2"><input type="checkbox" name="req" value="wifi-need" rel="Wifi"/></div>
  //<div class="cell-3"><input type="checkbox" name="wants" value="wifi-want" rel="Wifi"/></div>
//</div>

var moreLikeThisContent = function(prop){
  $("#more-like-this .property-name").text(prop.name)
  $("#more-like-this .property-thumb").empty().append("<img src='" + prop.thumb + "'/>")
  var fList = "";
  $("#more-like-this .property-facilities").empty();

  $.each(prop.propertyFacilities, function(i, facilities) {
    $.each(facilities, function(i, facility){
      if (facility[0].hasIt) {
        fList += "<div class='row'>";
        fList += "<div class='cell-1'>" + facility[0].name + "</div>";
        fList += "<div class='cell-2'><input type='checkbox' name='req' value='wifi-need' rel='Wifi'/></div>"
        fList += "<div class='cell-3'><input type='checkbox' name='wants' value='wifi-want' rel='Wifi'/></div>"
        fList += "</div>"
      }
    });
  });
  $("#more-like-this .property-location").empty();
  var lList = "";
  lList += "<div class='row'>";
  lList += "<div class='cell-1'>" + prop.location[0].neighbourhood + "</div>";
  lList += "<div class='cell-2'><input type='checkbox' name='req' value='wifi-need' rel='Wifi'/></div>"
  lList += "<div class='cell-3'><input type='checkbox' name='wants' value='wifi-want' rel='Wifi'/></div>"
  lList += "</div>"

  $("#more-like-this .property-facilities").append(fList);
  $("#more-like-this .property-location").append(lList);

}


var buildCard = function(item) {
  var propCard = "";
  // start card
  propCard += "<div class='property-wrapper' id='prop-id-" + item.id + "'>"
  // thumbnail
  propCard += "<div class='thumb'><img src='" + item.thumb + "' /></div>"
  // property details
  propCard += "<div class='property-details'>"
    propCard += "<div class='name'>" + item.name + "</div>"
  // location
    propCard += "<div class='location'><ul>"
      propCard += "<li class='neighbourhood'>" + item.location[0].neighbourhood + "</li>"
    propCard += "</ul></div>"
  // facilities
  propCard += "<div class='facilities'><ul>";
  if (requirements.length == 0 && wants.length == 0) {
    $.each(item.propertyFacilities, function(i, facilities) {
      $.each(facilities, function(i, facility){
        if (facility[0].hasIt) {
          //console.log(facility[0].name)
          propCard += "<li>" + facility[0].name + "</li>"
        }
      });
    });
  } else {
    //propCard += "<li>check against requirements</li>"
    $.each(item.propertyFacilities, function(i, facilities) {
      $.each(facilities, function(i, facility){
        //console.log(facility[0].name)
        console.log("wants");
        var n = requirements.includes(facility[0].name);
        var w = wants.includes(facility[0].name);
        //console.log(w);
        if (n){
          //console.log("needs: " + facility[0].name + " - has it: " + facility[0].hasIt)
          if (facility[0].hasIt) {
            propCard += "<li class='yes'>" + facility[0].name + "</li>"
          } else {
            propCard += "<li class='no'>" + facility[0].name + "</li>"
          }
        };
        if (w) {
          console.log("wants: " + facility[0].name + " - has it: " + facility[0].hasIt)
          if (facility[0].hasIt) {
            propCard += "<li class='yes'>" + facility[0].name + "</li>"
          } else {
            propCard += "<li class='no'>" + facility[0].name + "</li>"
          }
        };

        if (!n && !w && facility[0].hasIt){
          //console.log("else" + facility[0].name);
          propCard += "<li>" + facility[0].name + "</li>"
        }
        //console.log(facility[0].name + ": Wants it: " + n + ", Has it: " + facility[0].hasIt);
      })

    });

  }

  propCard += "</ul></div>"
  // review and price
  propCard += "<div class='two-col'>"
  // reviews
  propCard += "<div class='reviews'>"
    propCard += "<div class='review-score'>" + item.review[0].score + "</div>";
    propCard += "<div class='review-string'>"
      propCard += "<span class='review-string'>" + item.review[0].str + "</span>";
      propCard += "<span class='review-count'>" + item.review[0].count + " guest reviews</span>"
    propCard += "</div>"
  propCard += "</div>"
  // price
  propCard += "<div class='price'>"
    propCard += "<div class='price-display'>" + item.price[0].currencySymbol + "" + item.price[0].priceDisplay + "</div>";
    propCard += "<div class='info'>for 2 nights</div>"
  propCard += "</div>"
  propCard += "</div></div>"
  // tools
  propCard += "<div class='property-tools'>"
  propCard += "<ul><li><a href='#' class='favourite' rel='" + item.id + "'><span class='material-icons'>favorite_border</span></li>"
  propCard += "<li><a href='#' class='favourited' rel='" + item.id + "'><span class='material-icons'>favorite</span></a></li>"
  propCard += "<li><a href='#' class='more-like-this' rel='" + item.id + "'><span class='material-icons'>visibility</span></a></li>"
  propCard += "<li><a href='#' class='more-tools'><span class='material-icons more'>more_horiz</span></a></li>"
  propCard += "<li><a href='#'>Choose Room</a> <span class='material-icons'>arrow_forward</span></li>"
  propCard += "</ul></div>"

  // favourite
  propCard += "<div class='favourite-confirmed'>"
  propCard += "Great! Tell us what you like about this property and we can help you find others like this";
  propCard += "<ul><li>Good price</li> <li>Good location</li> <li>Amenities</li> <li>Style</li> <li>Guest Review</li></ul>"
  propCard += "</div>"


  // end card
  propCard += "</div>"

  $("#property-list").append(propCard);
}
