//View 1

//Die View ist eine Component.
//Man erkennt es an der Function "initComponent"

//Dies ist eine normale Klasse. Sie dient als View.
//alias = damit kann man die Klasse als xtype nutzen

Ext.define('AM.view.user.List' ,{
	extend: 'Ext.grid.Panel',//Diese View ist das Grid
	alias: 'widget.userlist',
	title: 'All Users',

	//Das Store wird nicht mehr "inline" in der initComponent-Funktion angelegt, sondern stattdessen referenziert
	//MERKE: In der View müssen Stores nur referenziert werden.
	store: 'Users',

	initComponent: function(){
		//Hier wird ein Store definiert. Ein Store besteht aus der Felder-Definition (Model) und zugehörige Daten (Model-Instanzen)
		//Das Grid Panel zeigt die Daten des Stores an
		/*this.store = {
			fields: ['name', 'email'], //Diese Zeile ist das Model. Hier wird das Model definiert.
			data: [
				{name: 'Ed', 	 email: 'ed@sencha.com'},//Diese Zeilen sind Instanzen des Models = Datensätze.
				{name: 'Thommy', email: 'thommy@sencha.com'}
			]
		};*/

		//Die Spalten des Grids
		this.columns= [
			{header: 'Name', dataIndex: 'name', flex: 1},
			{header: 'Email', dataIndex: 'email', flex: 1}
		];

		this.callParent(arguments);
	}
});