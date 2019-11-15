class SidebarView
{
  constructor(container, model)
  {
    this.container = container;
    this.model = model;
  }

  render() {

    /*const p = this.container.appendChild(document.createElement("p"));
    const pText = p.innerHTML = 1;

    const button = this.container.appendChild(document.createElement("button"));
    button.innerHTML = "+";*/

    //this.model.setNumberOfGuests(3);
    let numberOfPeople = this.model.getNumberOfGuests();

    /*var content =  `
        <div id="sideBarView">
        <div style="border-right: ">
          <div>
            <h3 id="title" style="margin-left: 10px; margin-bottom: 5px;">My dinner</h3>
            <div id="countPeople">
              <label style="margin-left: 10px;">People</label> 
              <input id="inputNumOfPeople" type="number" value="${this.model.getNumberOfGuests()}" step="1" min="1" style="margin-left: 10px; margin-bottom: 8px; width: 30px; height: 20px; padding: 5px; font-size: 1rem;">
            </div>
          </div>
        </div>
        <div id="dishInformation" style="border-bottom: solid; border-top: solid; border-left: solid; border-right: solid;
        margin-right: 77.5rem; padding-left: 10px; padding-top: 5px; background-color: #e5e5e5;">
          <span>Dish name</span>
          <span style="padding-left: 70px;">Cost</span>
        </div>
        <div id="dishesInformation"></div>
        
        <div id="totalPrice">SEK 
            <span class="valueOfTotalPrice">77.20</span>
        </div>
        <button id="confirmButton" class="button" type="button" style="margin-top: 30px; padding-left: 25px; padding-right: 25px; border-right: solid; 
        border-bottom: solid; margin-left: 30px; cursor: pointer; color: #212529; background-color: #f6b26b; border-color: #212529;">
          Confirm dinner
        </button>
      </div>
    `;

    this.container.innerHTML = content;*/

    /*this.container.append(
        makeWithAttribute("div", "sidebarContainer", "divBorder",
            [
                        makeWithAttribute("div", "sidebarContent1", "divBorder",
                            [makeWithAttribute("h3", "", "myDinnerClass", "My Dinner"),
                                     makeWithAttribute("div", "sidebarContent11", "",
                                         [makeWithAttribute("p", "", "", "People"),
                                                  makeInput("inputNumOfPeople", "number", "0", "1", "0") ]),
                                     ]),

                      makeWithAttribute("div", "sidebarContent2", "divBorder",
                          [makeWithAttribute("p", "", "dishNameClass", "Dish name"),
                                    makeWithAttribute("p", "", "costClass", "Cost") ]),

                        makeWithAttribute("div", "sidebarContent3", "divClass3",
                            [makeWithAttribute("p", "", "divClass33", "SEK"),
                                     makeWithAttribute("button", "", "sidebarBtn", "Confirm Dinner")])
                     ])
    );*/


      /*this.container.append(
          makeWithAttribute("div", "divBorder", "sidebarContainer",
              [
                  makeWithAttribute("div", ""/*"divBorder"*//*, "sidebarContent1",
                      /*[makeWithAttribute("h3", "", "myDinnerClass", "My Dinner"),
                                makeWithAttribute("div", "", "sidebarContent11",
                              [makeWithAttribute("p", "", "", "People"),
                                        makeInput("inputNumOfPeople", "number", "0", "1", "0") ]),
                      ]),

                  makeWithAttribute("div", ""/*"divBorder"*//*, "sidebarContent2",
                      /*[makeWithAttribute("p", "", "dishNameClass", "Dish name"),
                                makeWithAttribute("p", "", "costClass", "Cost") ]),

                  makeWithAttribute("div", ""/*"divClass3"*//*, "sidebarContent3",
                      /*[makeWithAttribute("p", ""/*"divClass33"*//*, "", "SEK"),
                                /*makeWithAttribute("button", "", "sidebarBtn", "Confirm Dinner")])
              ])
      );*/

      // FRÅGA: Hur kan man mata in data från dinnerModel till denna kod???
      this.container.append(
          makeWithAttribute("div", "sideBarView", "item-sidebar", [
                makeWithAttribute("div", "", "stretchBottom", [
              makeWithAttribute("h3", "", "my-dinner-text", "My Dinner"),
              //makeWithAttribute("")
              makeWithAttribute("p", "", "", "People"),
              makeInput("inputNumOfPeople", "number", "0", "1", "0", ""),
              makeTree("br", ""),
              makeWithAttribute("div", "divBorder","space", ["DishName ", " Cost"]),
              makeWithAttribute("div", "divBorderNothing", "space", ["Lasagne ", "SEK"]),
              makeTree("br", ""),

              makeWithAttribute("div", "", "flex-content-Btn", [
              makeWithAttribute("button", "flexBtn", "sidebarBtn", "Confirm Dinner") ]) ])





              /* makeWithAttribute("div", "divBorder", "divHeight",
               [makeWithAttribute("div", "", "divWidth",
                       [makeWithAttribute("h3", "", "my-dinner-text", "My Dinner"),
                                 makeWithAttribute("div", "", "inline-two_children-input",
                               [makeWithAttribute("p", "", "inline-child-people", "People"),
                                         makeInput("inputNumOfPeople", "number", "0", "1", "0", "") ]),
                                 makeWithAttribute("div", "item-sidebar-inner", "inline-two_children-col",
                               [makeWithAttribute("p", "", "inline-child-dishName", "Dish name"),
                                         makeWithAttribute("p", "", "inline-child-cost", "Cost") ]),
                                 makeWithAttribute("div", "", "",
                               [makeWithAttribute("p", "", "SEK-text", "SEK"),
                                         makeWithAttribute("button", "", "sidebarBtn", "Confirm Dinner")])
                       ])
               ])*/
         ])


          //makeWithAttribute("div", "", "item-sidebar", [makeTree("div", "Sidebar")])
      );


    this.afterRender();


  }

  afterRender() {
  }
}