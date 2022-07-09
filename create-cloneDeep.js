function cloneDeep(value) {
  const visitedValues = [];

  const clone = (data) => {
    let result;

    if (Array.isArray(data) || ((typeof data === "object") && (data !== null))) {
      const arleadyVisitedValueIndex = visitedValues.findIndex((el) => el.original === data);

      if (arleadyVisitedValueIndex !== -1) {
        return visitedValues[arleadyVisitedValueIndex].clone;
      }

      if (Array.isArray(data)) {
        result=[];
        visitedValues.push({
          clone: result,
          original: data,
        });

        for(let i = 0; i < data.length; i++) {
          result[i] = clone(data[i]);
        }
      } else {
        result = {};
        visitedValues.push({
          clone: result,
          original: data,
        });

        const keys = Reflect.ownKeys(data);

        for(let i = 0; i < keys.length; i++) {
          result[keys[i]] = clone(data[keys[i]]);
        }
      }
    } else {
      result = data;
    }

    return result;
  }

  return clone(value);
}

const obj = {
  a: 1,
  b: [1],
  c: {
    d: {
      e: {
        f: {
          g: [{
            h: [{
              e: 1,
            }]
          }],
        }
      }
    }
  },
}

const res = cloneDeep(obj);

console.log(res);
