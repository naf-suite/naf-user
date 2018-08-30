'use strict';
const { RequiredString } = require('../util/schema');
const Schema = require('mongoose').Schema;

const SchemaDefine = {
  id: { type: Number, required: true, index: true },
  parentid: { type: Number, required: true, index: true },
  name: RequiredString(64),
  order: Number,
};
const schema = new Schema(SchemaDefine);
schema.index({ id: 1 });
schema.index({ parentid: 1 });

module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('Department', schema, 'naf_dept');
};
