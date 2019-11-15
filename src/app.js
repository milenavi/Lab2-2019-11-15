// helper function to find the container by short name
// Milena: Container is the object that references the HTML parent element
// that contains the view.
// In HTML, the container is the area enclosed by the beginning and ending tags. 
// In HTML code, all container must have a start and stop tag to close the container.
// Basically, container contains a certain view.
// The Model object is the reference to the Dinner Model class.
const container=function(containerName){
    // #container-viewName betyder att vi har ett Element som
    // innehåller ett specifikt id = "container-viewName"
    // Ex: <div id="container-viewName">Hello</div>
  return document.body.querySelector("#container-"+containerName);
};

// the View containers will not all be visible at the same time. 
// Various screens will show different Views                                                              
const screens = { 
         home: ["home", "header"],
         search: ["header", "sidebar", "search"],
         //search: ["header", "search"],
         //dishSearch: ["header", "sidebar", "dishSearch"],
         overview: ["header", "overview"],
         sidebar: ["sidebar"],
         details: ["header", "sidebar", "details"],
         printout: ["header", "printout"]
      // TODO: add more screens here!    
};

// MY THOUGHTS:
// I assume that home, search and overview which are 
// represented as keys also identify as screens here. 
// These screens are associated with values 
// represented as View containers: home, header,
// sidebar, search and overview.


// switching between screens
const show= function(screenName) {

    /*let bigContainer = document.getElementById("content-flex");
    if(screenName === "search")
    {
        bigContainer.setAttribute("id", "content-grid");
    } else {
        bigContainer.setAttribute("id", "content-flex");
    }*/

    // hide all views first
    // optional FIXME: we could avoid hiding the containers that are part of the screen to be shown
    // optional FIXME: finding the containers could be done automatically
    // by looking at document.body.firstChild.children
    ["header", "home", "overview", "search", "sidebar"]
      .forEach(containerName => container(containerName).style.display="none");
    
    // now we show all the Views used by the indicated screen
    screens[screenName]
      .forEach(containerName => container(containerName).style.display = "block");
};
                                                
window.onload = function () {
  //We instantiate our model
  const model = new DinnerModel();
  model.setNumberOfGuests(1);

  Promise.all([model.getDish(1), model.getDish(2)]).then(function(values) {
      for(const element of values) {
          model.addDishToMenu(element);
      }

      const homeView = new HomeView(container("home"), model); // new HomeView(document.body.querySelector("#home"));
      const overviewView = new OverviewView(container("overview"), model);
      const searchView = new SearchView(container("search"), model);
      // TODO:  more views here
      //const headerView = new HeaderView(container("header"), model);
      const detailsView = new DetailsView(container("details"), model);
      const printoutView = new PrintoutView(container("printout"), model);
      const sidebarView = new SidebarView(container("sidebar"), model);

      // TODO: The views are not being rendered yet. Figure out how to do so.
      homeView.render();
      overviewView.render();
      searchView.render(2);
      sidebarView.render();
      //headerView.render();
      detailsView.render();
      printoutView.render();
  })

    show("search");


    /**
   * IMPORTANT: app.js is the only place where you are allowed to use document.body
   * In other Views you should limit your DOM searches to children of that View. For that, you must use querySelector()
   * It is possible to implement Views using no DOM search at all, using DOM fields like element.firstChild, 
   * element.nextSibling...
   */
};


const makeTree= (type, children) => {
    const ret= document.createElement(type);
    if(children instanceof Array)
        ret.append(... children);   // ES6 equivalent to ret.append.apply(ret, children)
    else // probably one single string, to create a text Node, or one single Element
        ret.append(children);
    return ret;
}

const makeWithAttribute= (type, id, className, children) => {
    const ret= document.createElement(type);
    ret.id = id;
    ret.setAttribute("class", className);
    if(children instanceof Array)
        ret.append(... children);   // ES6 equivalent to ret.append.apply(ret, children)
    else // probably one single string, to create a text Node, or one single Element
        ret.append(children);
    return ret;
}


const makeImage= (id, className, src) => {
    const ret= document.createElement("img");
    ret.id = id;
    ret.setAttribute("class", className);
    ret.src = "images/" + src;
    return ret;
}

const makeInput= (id, type, value, step, min, placeholder) => {
    const ret= document.createElement("input");
    ret.id = id;
    ret.type = type;
    ret.value = value;
    ret.step = step;
    ret.min = min;
    ret.placeholder = placeholder;
    return ret;

}