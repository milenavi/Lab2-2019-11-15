class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.sidebar = undefined;
  }

  render(dishId) {
    /*var content = `
      <div class="searchSection" style="display: block; text-align: center; margin-top: 60px; margin-right: 30%;">
          <h6 style="margin-right: 24%; margin-bottom: 15px;">FIND A DISH</h6>
           <div id="sideBarView"></div>
           <div id="dishItems"></div>
           <form id="dishSearchView" style="box-sizing: border-box; display: block; margin-top: 0em;">
            <input type="text" placeholder="Enter key words">
            <label>
                <select>
                    <option>All</option>
                    <option>Main Course</option>
                    <option>Side Dish</option>
                    <option>Dessert</option>
                    <option>Appetizer</option>
                </select>
            </label>
            <label>
                <button id="searchBtn" style="border-right: solid; border-bottom: solid; cursor: pointer; color: #212529; background-color: #f6b26b; border-color: #212529;">search</button>
            </label>

         <div>
            <div id="dishesSpinner">
                <div class="spinner-border" id="loader"></divclass>
            </div>
         </div>
      </div>
    `;

    this.container.innerHTML = content;*/

    /*this.container.append(
        makeWithAttribute("div", "divBorder", "divMiddle", [
                    makeWithAttribute("div", "divBorder", "divMiddleMiddle", "Hello")
                ])
    );*/

    /*this.container.append(
            makeWithAttribute("div", "divBorder", "divClass1",
                [makeWithAttribute("div", "", "divWidth", [
                    makeWithAttribute("div", "", "", "Hello")
                ]),



                    makeWithAttribute("div", "", "divMiddle", [
                        makeWithAttribute("div", "divBorder", "divMiddleMiddle", [
                            makeWithAttribute("h5", "", "find-a-dish-text", "FIND A DISH"),
                            makeInput("", "text", "", "", "", "Enter key words"),
                            makeWithAttribute("label", "", "", [
                                makeWithAttribute("select", "", "", [
                                    makeTree("option", "All"),
                                    makeTree("option", "Main Course"),
                                    makeTree("option", "Side Dish"),
                                    makeTree("option", "Dessert"),
                                    makeTree("option", "Appetizer")
                                ])
                            ]),
                            makeWithAttribute("button", "search-dish-button", "", "search")
                        ])
                    ])

                ])
    );*/

    // 1) Row
    //


    this.container.append(

        //makeWithAttribute("div", "boxContainer", "", [

                  /*makeWithAttribute("div", "sidebarContainer", "", [


                  ]),*/

                  //______________________________________________________________

              makeWithAttribute("div", "searchContainer", "item-main", [

                    //makeWithAttribute("div", "divBorder", "divWidth", "Testing"),

                      makeWithAttribute("div", "", "divMiddleHeight", [
                    makeWithAttribute("div", "", "divMiddleWidth", [
                      makeWithAttribute("h5", "", "find-a-dish-text", "FIND A DISH"),
                      makeInput("", "text", "", "", "", "Enter key words"),
                      makeWithAttribute("label", "", "", [
                        makeWithAttribute("select", "", "", [
                          makeTree("option", "All"),
                          makeTree("option", "Main Course"),
                          makeTree("option", "Side Dish"),
                          makeTree("option", "Dessert"),
                          makeTree("option", "Appetizer")
                           ])
                         ]),
                        makeWithAttribute("button", "search-dish-button", "", "search")
                       ])
                     ])


              ])
       // ])

        //makeWithAttribute("div", "", "item-main", [makeTree("div", "Search")])

    );
        //_____________________________________________________________________________


        /*if (this.sidebar === undefined) {
          return  this.sidebar = new SidebarView((this.container.querySelector("#sidebarContainer"), this.model));
        }*/
    //const dishSearch = this.container.querySelector("#dishSearchView");
    //const dishes = this.container.querySelector("#dishItems");


    this.afterRender();

  }

  afterRender() {
    //this.sidebar.render();

    /*this.model.getFullMenu().map(dish => {
    const paragraph = this.container.appendChild(document.createElement('P'));
    paragraph.innerHTML = dish;

  })*/

    /*const totalMenuPrice = this.model.getTotalMenuPrice();
    let dishesToPrintHTML = this.model.getFullMenu().map(
        dish => `
        <div>
            <div>${totalMenuPrice}</div>
            <div>
              <p>Id: ${dish.id}</p>
              <p>Name: ${dish.title} </p>
            </div>
       </div>
         `
    ).join("");

    this.container.innerHTML = dishesToPrintHTML;*/

    /*let dishes = this.model.getFullMenu();
    for (let key of dishes) {
      console.log(key);
      let item = this.container.appendChild(document.createElement('P'));
      item.innerHTML = key.title;

    }*/
  }
}