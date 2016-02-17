angular.module('noodlio.services-categories', [])

.factory('Categories', function() {
  /**
  * List of pre-defined categories (example only!)
  *
  * If you expect that the categories might change frequently over time,
  * then it is recommended to store them on the server-side (Firebase)
  * and retrieve the list from here.
  *
  */
  return {
    't-shirts': {
        title: "T-shirts"
    },
    'jeans': {
        title: "Jeans"
    },
    'sweaters': {
        title: "Sweaters"
    },
    'pyjamas': {
        title: "Pyjamas"
    }
  }
});