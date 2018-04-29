(() => {
  const Rectangle = Backbone.Model.extend({});

  const RectangleView = Backbone.View.extend({
    tagName: "div",
    className: "rectangle",

    events: {
      click: "move"
    },
    move: function() {
      this.$el.css("left", this.$el.position().left + 10);
    },
    render: function() {
      this.setDimensions();
      this.setPosition();
      this.setColor();
      return this;
    },
    setDimensions: function() {
      this.$el.css({
        width: this.model.get("width") + "px",
        height: this.model.get("height") + "px"
      });
    },
    setPosition: function() {
      let position = this.model.get("position");
      this.$el.css({
        left: position.x,
        top: position.y
      });
    },
    setColor: function() {
      this.$el.css({
        backgroundColor: this.model.get("backgroundColor"),
        borderColor: this.model.get("borderColor")
      });
    }
  });

  let models = [
    new Rectangle({
      width: 100,
      height: 60,
      position: {
        x: 300,
        y: 150
      },
      backgroundColor: "red",
      borderColor: "brown"
    }),
    new Rectangle({
      width: 140,
      height: 90,
      position: {
        x: 3,
        y: 15
      },
      backgroundColor: "green",
      borderColor: "brown"
    }),
    new Rectangle({
      width: 800,
      height: 60,
      position: {
        x: 30,
        y: 500
      },
      backgroundColor: "pink",
      borderColor: "brown"
    }),
    new Rectangle({
      width: 100,
      height: 380,
      position: {
        x: 800,
        y: 80
      },
      backgroundColor: "blue",
      borderColor: "brown"
    })
  ];

  _(models).each(model => {
    $("div#canvas").append(new RectangleView({ model: model }).render().el);
  });

  let myView = new RectangleView({ model: myRectangle });

  $("div#canvas").append(myView.render().el);
})();
