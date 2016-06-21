import { propertyEqual } from 'nilavu/lib/computed';

export default Em.Component.extend({
  tagName: 'li',
  classNameBindings: ['active', 'tabClassName', ':tabDisabled'],

  tabClassName: function() {
    return 'app-selection-' + this.get('tab');
  }.property('tab'),

  active: propertyEqual('selectedTab', 'tab'),

  title: function() {
    return I18n.t('launcher.' + this.get('tab').replace('-', '_'));
  }.property('tab'),

  lowerTitle: function() {
      return this.get('title').toLowerCase();
  }.property('title'),

  _addToCollection: function() {
    this.get('appelpanels').addObject(this.get('tabClassName'));
  }.on('didInsertElement'),

  actions: {

    select: function() {
      alert(this.get('tab'));
      this.set('selectedTab', this.get('tab'));
    }
  }
});
