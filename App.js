Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[{ html: 'my first Zz version 2!'}, {xtype: 'rallyiterationcombobox'},{xtype: 'rallyreleasecombobox'}],
    layout: 'hbox',
    launch: function() {
        //Write app code here
console.log('First');
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
});
