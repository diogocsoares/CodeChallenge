function filter_list(l) {
    let listNumbers = [];
    l.forEach(element => {
      if (typeof element === 'number') {
        listNumbers.push(element);
      }
    });
    return listNumbers;
  }

  console.log(filter_list([1,2,'a','b']));