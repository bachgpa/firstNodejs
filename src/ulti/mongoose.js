export default {
  multipleMongooseToObject: function (mongooses) {
    let array = mongooses.map((mongoose) => {
      return mongoose.toObject();
    });
    return array;
  },
  mongooseToObject: function (mongoose) {
    let newObject = mongoose.toObject();
    return newObject;
  },
};
