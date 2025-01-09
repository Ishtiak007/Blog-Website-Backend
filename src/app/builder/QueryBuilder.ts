import { FilterQuery, Query } from 'mongoose';

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    if (this?.query?.search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map((field) => {
          return {
            [field]: { $regex: this?.query?.search, $options: 'i' },
          } as FilterQuery<T>;
        }),
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };

    // console.log(queryObj)

    const excludeFields = ['search', 'sortBy', 'sortOrder'];

    excludeFields?.forEach((el) => delete queryObj[el]);

    if (queryObj?.filter) {
      this.modelQuery = this.modelQuery.find({ author: queryObj.filter });
      delete queryObj.filter;
    }

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

    return this;
  }

  sortBy() {
    const sortBy =
      (this?.query?.sortBy as string)?.split(',')?.join(' ') || '-createdAt';
    const sortOrder = this.query?.sortOrder === 'desc' ? '-' : '';

    this.modelQuery = this.modelQuery.sort(`${sortOrder}${sortBy}`);

    return this;
  }
}
