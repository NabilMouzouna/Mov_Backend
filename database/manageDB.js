function Find(query = {}, doc = []) {
    if (Object.keys(query).length === 0) {
      return doc; // Return all documents if no query is provided
    }
    return doc.filter((item) => {
      for (let key in query) {
        if (item[key] !== query[key]) {
          return false; // Return false if any query condition doesn't match
        }
      }
      return true; // Return true only if all query conditions match
    });
  }


function Sorting(sortBy = 'rating',doc = []){
    return doc.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    })
}

function Filter(genre = 'All',doc){
  if(genre === "All") return doc
    return doc.filter((item)=>{
        return item.genre.includes(genre)
    })
}

function Pagination(start=0,limit=0, doc = []) {
    if (!Array.isArray(doc) || doc.length === 0) {
      return [];
    }
    return doc.slice(4*(start - 1),4*(start - 1) + Math.min(limit, doc.length));
  }

  const Collection = { Filter, Sorting, Find, Pagination }
  module.exports = Collection