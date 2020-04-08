module.exports = function(source) {
  console.log(this.query);

  return source.replace("jjmm", this.query.name);
};
