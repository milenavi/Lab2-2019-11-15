class PrintoutView
{
    constructor(container, model)
    {
        this.container = container;
        this.model = model;
    }

    render() {

        var content = `
			  <div>
				<div id='dishDetailsHeader'>
				  <div style="margin-left: 1rem;">My dinner: ${this.model.getNumberOfGuests()} people</div>
				  <button id="goBackBtn" class="button" style="margin-top: 30px;  padding-left: 25px; padding-right: 25px; border-right: solid; 
        border-bottom: solid; margin-left: 30px; cursor: pointer; color: #212529; background-color: #f6b26b; border-color: #212529;">Go back and edit dinner</button>
				</div>
				<hr>
				<div id='dishDetailsBody' style="text-align: center;">
				  <div class="printDishes2">
					<div id='dishItems2'></div>
					<div> 
						Dish preparations are displayed here.
					</div>
				  </div>  
				  <div id='displayPrice'></div>
				  <hr> 
				</div>
			  </div>`;

        this.container.innerHTML = content;

        this.afterRender();

    }

    afterRender() {
    }
}