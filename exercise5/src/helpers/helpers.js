export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    // TODO: implement logic here
    try {
      const result = array.reduce((acc, obj) => {
        const val = obj[key];
        if (!acc[val]) {
          acc[val] = 0;
        }
        acc[val] += 1;
        return acc;
      }, {});
      Object.keys(result).forEach((k) => {
        result[k] /= array.length;
      });
      return result;
    } catch (error) {
      return {};
    }
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    // TODO: implement logic here
    let current = obj;
    const subpath = path.split('.');
    for (let i = 0; i < subpath.length; i++) {
      if (!current[subpath[i]]) return defaultValue;
      current = current[subpath[i]];
    }
    return current;
  },
};
