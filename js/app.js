
$(document).ready(function() {
    function Gallery(img) {
      this.title = img.title;
      this.image_url = img.image_url;
      this.description = img.description;
      this.keyword = img.keyword;
      this.horns = img.horns;
  
  }
   Gallery.prototype.render = function() {
          let $imgClone = $("#gallery").clone();
          $imgClone.find("h2").text(this.title);
          $imgClone.find("img").attr("src", this.image_url);
          $imgClone.find("#p1").text(this.description);
          $imgClone.find("#p2").text(this.keyword);
          $imgClone.find('#p3').text(this.horns);
          // $imgClone.removeClass("img-template");
          $imgClone.removeAttr("id");
          $imgClone.attr("id", this.title);
          $("main section:first").append($imgClone);
};





        const readJson = () => {
          $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
            data.forEach(dogItem => {
              let img = new Gallery(dogItem);
              img.render();
            });
          });
        };
        readJson();
      });
    //   $( "#gallery" ).select(function() {
        
    //     }
    //   });
      // {
      //     "image_url": "https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      //     "title": "Happy Jackson's Chameleon",
      //     "description": "These are really common in Hawaii",
      //     "keyword": "chameleon",
      //     "horns": 2
      //   },