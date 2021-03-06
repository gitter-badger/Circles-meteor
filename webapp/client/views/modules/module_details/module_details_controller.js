this.ModulesModuleDetailsController = RouteController.extend({
	template: "ModulesModuleDetails",
	

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		this.redirect('modules.module_details.models_module', this.params || {}, { replaceState: true });
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("find_module", this.params.moduleId)
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		return {
			params: this.params || {},
			find_module: Modules.findOne({_id:this.params.moduleId}, {})
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
		
	}
});