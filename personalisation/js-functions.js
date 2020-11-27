



var displayResults = function(data){

  $.each(data.items, function(i, item) {
      var propCard = "";
      // start card
      propCard += "<div class='property-wrapper'>"
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
      propCard += "<ul><li><span class='material-icons'>favorite_border</span></li>"
      propCard += "<li><span class='material-icons'>remove_circle_outline</span></li>"
      propCard += "<li><a href='' class='more-tools'><span class='material-icons more'>more_horiz</span></a></li>"
      propCard += "<li><a href=''>Choose Room</a> <span class='material-icons'>arrow_forward</span></li>"
      propCard += "</ul></div>"
      // end card
      propCard += "</div>"

      $("#property-list").append(propCard);

  });

}
