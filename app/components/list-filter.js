import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      console.log('hey guys');
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.value) {
          this.set('results', filterResults.results);
          console.log('results are set');
        }
      });
    },
    // handleFilterEntry(){
    //   let filterInputValue = this.value;
    //   let filterAction = this.filter;
    //   filterAction(filterInputValue)
    // }
  },
});
