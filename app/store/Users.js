//Store

Ext.define('AM.store.Users', {
	extend: 'Ext.data.Store',
	
	//Anstelle der Definition der Felder "inline", referenziert man hier einfach das Model
	model: 'AM.model.User',

	//fields: ['name', 'email'],  //Felder werden "inline" definiert

	data: [						//Store
		{name: 'Ed', email: 'ed@sencha.com'},
		{name: 'Tommy', email: 'tommy@sencha.com'}
	]
});