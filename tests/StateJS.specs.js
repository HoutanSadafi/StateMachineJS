describe("StateJS", function() {
 
	it("when creating the state machine, not providing an initial state will throw an exception", function() {
		
		var config = {};

		var throwsException = function(){
			var machine = new StateMachine(config);
		};
		
		expect(throwsException).toThrow();
	});	

	it("when creating the state machine, we must provide an initial state", function() {
		
		var config = {
			initial : 'statename'
		};

		var throwsException = function(){
			var machine = new StateMachine(config);
		};
		
		expect(throwsException).not.toThrow();
	});	

	it("when providing an event with 'name', 'from' and 'to', calling the event in the correct state changes the state to the 'to' state", function() {
		
		var config = {
			initial : 'green',
			events : [
				{ name: 'toRed', from: 'green', to: 'red'}
		]};

		var state = new StateMachine(config);

		state.toRed();
		
		expect(state.getCurrentState()).toEqual('red');
	});	

	it("when providing an event with multiple 'from' states, calling the event in the correct state changes the state to the 'to' state", function() {
		
		var config = {
			initial : 'green',
			events : [
				{ name: 'toRed', from: ['orange', 'green'], to: 'red'}
		]};

		var state = new StateMachine(config);

		state.toRed();
		
		expect(state.getCurrentState()).toEqual('red');
	});	
});