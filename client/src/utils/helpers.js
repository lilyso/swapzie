module.exports = {
  truncate_text: (passedString) => {
    // Truncates text to 100 characters max
    var theString = passedString.substring(0, 100);
    return theString;
  },
  compare: function (a, b, opts) {
    // Compares two variables
    if (a === b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  },
  limit: (arr, limit) => {
    if (!Array.isArray(arr)) {
      return [];
    }
    // Reverses array and limits varibles to a specific number to get the latest reviews
    return arr.reverse().slice(0, limit);
  },
  latest: (arr) => {
    // Reverses array to get the latest reviews
    return arr.reverse();
  },
};
