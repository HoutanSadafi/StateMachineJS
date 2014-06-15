
/*
var config = {
	initial : 'start',
	events : [
		{ name : , from: '' , to: '' },
		{}
	]
};


var state = new StateMachine(config);

state.event();  */

function StateMachine(config) {
	if ( !(this instanceof StateMachine)){
		return new StateMachine(config);
	}

	if (!config.initial) {
		throw {
				name : 'bad config',
				message : 'no initial state'
			}; 
	}

	this.state = config.initial;
	var events = config.events || [];
	var self = this;

	events.forEach(function(el){
		self[el.name] = function(){

			if (el.from.constructor === String){
				el.from = [ el.from ]
			}

			if (el.from.indexOf(self.getCurrentState()) != -1){

				self.state = el.to;
			}
		}
	});
}

StateMachine.prototype.getCurrentState = function() {
	return this.state;
};