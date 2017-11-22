import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({

	filteredResources: computed('searchText', 'model', function() {
    let searchText = this.get('searchText');
    let resources = this.get('model');
    let regex = new RegExp(searchText, 'i');
    
    if (searchText) {
      return resources.filter(function(resource){
        return  resource.match(regex);
      });
    } else {
      return resources.sort();
    }
  })
});