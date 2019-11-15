class HomeView {
  constructor(container) {
    this.container = container;
    this.startBtn = null;
  }
  
  // An example of creating HTML declaratively. Think about the pros and cons of this approach.
  render() {
    /*var content = /* template */ /*`
    <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column" style="display: block; text-align: center; margin-top: 60px;">
        <p class="text-center p-max-width">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel laoreet orci. Nullam ut iaculis diam. Aliquam
          magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh elementum euismod a sit amet
          arcu. Maecenas a efficitur leo.
        </p>
        <div class="spacing-medium"></div>
        <button id="startBtn" class="btn btn-lg btn-primary-color" style="border-right: solid; border-bottom: solid; cursor: pointer; margin-top: 60px; font-size: 20px; color: #212529; background-color: #f6b26b; border-color: #212529;">
          Create new dinner
        </button>
      </div>
    `;*/

    this.container.append(
        makeWithAttribute("div", "someID", "container text-center full-vh d-flex align-items-center justify-content-center flex-column",
            [makeWithAttribute("p", "", "text-center p-max-width", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel laoreet orci. Nullam ut iaculis diam. Aliquam\n" +
                "          magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh elementum euismod a sit amet\n" +
                "          arcu. Maecenas a efficitur leo."),
                     makeWithAttribute("div", "", "spacing-medium", ""),
                     makeWithAttribute("button", "startBtn", "btn btn-lg btn-primary-color", "Create new dinner")] )


    );


    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
