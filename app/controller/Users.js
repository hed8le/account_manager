//Controller

//Controller warten auf Events ("listen for Events") von der View
//Events in der View werden meistens vom User getriggert, z.B. Klick auf einen Button

Ext.define('AM.controller.Users', {
	extend: 'Ext.app.Controller',

	//Dem Controller müssen die Views bekannt sein, die er "abhorcht"
	views: [
		'user.List',
		'user.Edit'
	],

	//Dem Controller müssen auch die Stores bekannt sein. Warum?
	stores: ['Users'],

	//Dem Controller müssen auch die Models bekannt sein. Warum?
	models: ['User'],

	//debugger;
	init: function(){
		this.control({
			//Event-Name = itemdblclick
			//Event-Handler = editUser

			//Beim Eintreten des Events "itemdblclick" soll der Event-Handler "editUser" ausgeführt werden
			'viewport > userlist': {
				itemdblclick: this.editUser
			},
			'useredit button[action=save]': {
				click: this.updateUser
			}

			//ComponentQuery selector:
			//'viewport > panel': {
			//	  render: this.onPanelRendered
			//}
		});
	},

	//Handler Function Name "editUser"
	editUser: function(grid, record) { 
		//console.log('Double clicked on ' + record.get('name'));
		var view = Ext.widget('useredit');
		
		//Every Component in Ext JS 4 has a "down"-Function
		view.down('form').loadRecord(record);
	},

	updateUser: function(button){
		console.log('Dennis clicked the Save button!');
	}

	//grün sind immer Funktionen (synonym wird auch Methode verwendet).
	//onPanelRendered: function() {
	//    console.log('The panel was rendered');
	//}
});