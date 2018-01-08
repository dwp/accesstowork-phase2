var _ = require('lodash')
var moment = require('moment')

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  filters.randnum = function(str,low,high) {
      return low + Math.floor(Math.random()*(1+high-low));
  }

  filters.revCron = function(array) {
      return _.sortBy(array,function(el)
      {
        return new Date(el.date);
      }).reverse();
  }

  filters.formatDate = function(str,format) {
      var d = moment(str).format(format);
      if (d !== 'Invalid date') return d;
      else return '';
  }

  filters.formatToday = function(str,format) {
      var d = moment().format(format);
      if (d !== 'Invalid date') return d;
      else return '';
  }

  filters.slugify = function(str) {
      return str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()’]/g,"").replace(/ +/g,'_').toLowerCase();
  }

  filters.check = function(str,checkee,output) {
      return str == checkee ? output : '';
  }

  filters.randarr = function(array) {
      return _.sample(array);
  }

  filters.isActive = function(val,active){
    if (val == active) return ' class=active'
  }

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */

  filters.money = function(str) {
    var num = parseFloat(str).toFixed(2);
    return isNaN(num) ? "0.00" : num;
  }

  filters.ttwMiles = function(str) {
    var num = (parseFloat(str) * 0.25).toFixed(2) ;
    return isNaN(num) ? "0.00" : num;
  }

  filters.tiwMiles = function(str) {
    var num = (parseFloat(str) * 0.45).toFixed(2) ;
    return isNaN(num) ? "0.00" : num;
  }

  return filters
}
