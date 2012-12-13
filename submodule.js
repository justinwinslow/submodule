/**
 * @license submodule 0.1.0 - Justin Winslow
 * Available via the MIT or new BSD license.
 */

//this is intended to demonstrate GitHub submodule functionality

define([], function(){
	return {
		property: 'value',
		method: function(){
			console.log('Your Property: ' + this.property);
		}
	};
});