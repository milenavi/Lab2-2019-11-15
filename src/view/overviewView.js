class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {

        const number_of_guests = this.model.setNumberOfGuests(2);
		var content = `
			  <div>
				<div id='overViewHeader'>
				  <div style="margin-left: 1rem;">My dinner: ${this.model.getNumberOfGuests()} people</div>
				  <button id="goBackBtn" class="button" style="margin-top: 30px;  padding-left: 25px; padding-right: 25px; border-right: solid; 
        border-bottom: solid; margin-left: 30px; cursor: pointer; color: #212529; background-color: #f6b26b; border-color: #212529;">Go back and edit dinner</button>
				</div>
				<hr>
				<div id='overViewBody' style="text-align: center;">
				  <div class="printDishes">
					<div id='dishItems'></div>
					<div> 
						Dishes are displayed here.
					</div>
				  </div>  
				  <div id='displayPrice'></div>
				  <div>
					<p>Total</p>
					<p class="valueTotalPrice"></p>
				  </div>
				  <hr> 
				  <button class="printFullRecipeBtn" style=" margin-top: 30px; padding-left: 25px; padding-right: 25px; border-right: solid; 
        border-bottom: solid; margin-left: 30px; cursor: pointer; color: #212529; background-color: #f6b26b; border-color: #212529;">Print Full Recipe</button>
				</div>
			  </div>`;

		this.container.innerHTML = content;

		this.afterRender();
    }

    afterRender() {
    }
}
