class APIfeatures {
  constructor(query, queryRequested) {
    // @param1: The query needed to modify
    // @param2: The requested query
    this.query = query;
    this.queryRequested = queryRequested;
  }

  //* delete the non query properties like page,sort fields,limit
  filter() {
    const nonQueryProp = ["page", "sort", "fields", "limits"];
    const tempQuery = { ...this.queryRequested };
    nonQueryProp.forEach((property) => {
      delete tempQuery[property];
    });

    //* Also adding the '$' in the comparison operator for mongoDB
    let queryString = JSON.stringify(tempQuery);
    queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, (matchedKey) => {
      return `$${matchedKey}`;
    });

    //adding this to the query prop
    this.query = this.query.find(JSON.parse(queryString));

    //returning this object so that we can chain multiple functions
    return this;
  }

  //* Implementation of pagination
  paginate() {
    const page = this.queryRequested.page;
    const limit = this.queryRequested.limit;
    const skip = (page - 1) * limit; // <- calculating limits
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

  //* Implementation of sorting
  sortOut() {
    if (this.queryRequested.sort) {
      let sortingString = this.queryRequested.sort.split(",");
      sortingString = sortingString.join(" ");
      this.query = this.query.sort(sortingString);
    } else {
      this.query = this.query.sort("createdAt");
    }
    return this;
  }

  //* Implementation of selection field
  selectFields() {
    if (this.queryRequested.fields) {
      const fieldString = JSON.stringify(this.queryRequested.fields)
        .split(",")
        .join(" ");
      this.query = this.query.select(JSON.parse(fieldString));
    } else {
      this.query = this.query.select("-createdAt -updatedAt -__v");
    }
    return this;
  }
}

export default APIfeatures;
