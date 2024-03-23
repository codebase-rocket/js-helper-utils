// Info: Test Cases
'use strict';

// Dependencies
const Utils = require('js-helper-utils');


///////////////////////////////////////////////////////////////////////////////

// Test .isNumber() function
console.log( "isNumber('aa'):", Utils.isNumber('aa') ); // Output: false
console.log( "isNumber('10.20'):", Utils.isNumber('10.20') ); // Output: false
console.log( "isNumber(''):", Utils.isNumber('') ); // Output: false
console.log( "isNumber(10):", Utils.isNumber(10) ); // Output: true
console.log( "isNumber(Number('aa') - NaN):", Utils.isNumber(Number('aa')) ); // Output: false


// Test .isInteger() function
console.log( "isInteger(11):", Utils.isInteger(11) ); // Output: true
console.log( "isInteger(11.00):", Utils.isInteger(11.0) ); // Output: true
console.log( "isInteger(11.01):", Utils.isInteger(11.01) ); // Output: false


// Test .isFunction() function
console.log( "isFunction(function(){}):", Utils.isFunction( function(){} ) ); // Output: true
console.log( "isFunction(50):", Utils.isFunction(50) ); // Output: false
console.log( "isFunction(null):", Utils.isFunction(null) ); // Output: false


// Test .stringToNumber() function
console.log( "stringToNumber('10'):", Utils.stringToNumber('10') ); // Output: 10
console.log( "stringToNumber('10.20'):", Utils.stringToNumber('10.20') ); // Output: 10.2
console.log( "stringToNumber(''):", Utils.stringToNumber('') ); // Output: null
console.log( "stringToNumber(10):", Utils.stringToNumber(10) ); // Output: 10


// Test .validateNumber() function
console.log( "validateNumber(11):", Utils.validateNumber(11) ); // Output: true
console.log( "validateNumber(0/0):", Utils.validateNumber(0/0) ); // (Zero divided by Zero) Output: false
console.log( "validateNumber(NaN):", Utils.validateNumber(NaN) ); // Output: false


// Test .round() function
console.log( "round(11, 2):", Utils.round(11, 2) ); // Output: 11
console.log( "round(11.00, 2):", Utils.round(11.00, 2) ); // Output: 11
console.log( "round(11.01, 2):", Utils.round(11.01, 2) ); // Output: 11.01
console.log( "round(11.01111111, 2):", Utils.round(11.01111111, 2) ); // Output: 11.01
console.log( "round(11.01999999, 2):", Utils.round(11.01999999, 2) ); // Output: 11.02
console.log( "round(11.09999999, 2):", Utils.round(11.09999999, 2) ); // Output: 11.1
console.log( "round(11.99999999, 2):", Utils.round(11.99999999, 2) ); // Output: 12
console.log( "round(11.5249, 2):", Utils.round(11.5249, 2) ); // Output: 11.53
console.log( "round(351.63149999999996, 3):", Utils.round(351.63149999999996, 3) ); // Output: 351.632


// Test .roundWithCascading() function
console.log( "roundWithCascading(11, 2, 10):", Utils.roundWithCascading(11, 2, 10) ); // Output: 11
console.log( "roundWithCascading(11.00, 2, 10):", Utils.roundWithCascading(11.00, 2, 10) ); // Output: 11
console.log( "roundWithCascading(11.01, 2, 10):", Utils.roundWithCascading(11.01, 2, 10) ); // Output: 11.01
console.log( "roundWithCascading(11.01111111, 2, 10):", Utils.roundWithCascading(11.01111111, 2, 10) ); // Output: 11.01
console.log( "roundWithCascading(11.01999999, 2, 10):", Utils.roundWithCascading(11.01999999, 2, 10) ); // Output: 11.02
console.log( "roundWithCascading(11.09999999, 2, 10):", Utils.roundWithCascading(11.09999999, 2, 10) ); // Output: 11.1
console.log( "roundWithCascading(11.99999999, 2, 10):", Utils.roundWithCascading(11.99999999, 2, 10) ); // Output: 12
console.log( "roundWithCascading(11.5249, 2, 10):", Utils.roundWithCascading(11.5249, 2, 10) ); // Output: 11.53
console.log( "roundWithCascading(351.63149999999996, 3, 10):", Utils.roundWithCascading(351.63149999999996, 3, 10) ); // Output: 351.632


// Test .sanitizeInteger() function
console.log( "sanitizeInteger('1'):", Utils.sanitizeInteger('1') ); // Output 1
console.log( "sanitizeInteger(1):", Utils.sanitizeInteger(1) ); // Output 1
console.log( "sanitizeInteger('-1'):", Utils.sanitizeInteger('-1') ); // Output -1
console.log( "sanitizeInteger(-1):", Utils.sanitizeInteger(-1) ); // Output -1
console.log( "sanitizeInteger('A'):", Utils.sanitizeInteger('A') ); // Output null
console.log( "sanitizeInteger(1.333):", Utils.sanitizeInteger(1.333) ); // Output 1
console.log( "sanitizeInteger(1.999):", Utils.sanitizeInteger(1.999) ); // Output 1

// Test .sanitizeBoolean() function
console.log( "sanitizeBoolean('1'):", Utils.sanitizeBoolean('1') ); // Output true
console.log( "sanitizeBoolean(1):", Utils.sanitizeBoolean(1) ); // Output true
console.log( "sanitizeBoolean('0'):", Utils.sanitizeBoolean('0') ); // Output false
console.log( "sanitizeBoolean(0):", Utils.sanitizeBoolean(0) ); // Output false
console.log( "sanitizeBoolean('33'):", Utils.sanitizeBoolean('33') ); // Output true
console.log( "sanitizeBoolean(33):", Utils.sanitizeBoolean(33) ); // Output true
console.log( "sanitizeBoolean('-33'):", Utils.sanitizeBoolean('-33') ); // Output true
console.log( "sanitizeBoolean(-33):", Utils.sanitizeBoolean(-33) ); // Output true
console.log( "sanitizeBoolean('abc'):", Utils.sanitizeBoolean('abc') ); // Output false
console.log( "sanitizeBoolean('true'):", Utils.sanitizeBoolean('true') ); // Output false
console.log( "sanitizeBoolean('false'):", Utils.sanitizeBoolean('false') ); // Output false
console.log( "sanitizeBoolean(true):", Utils.sanitizeBoolean(true) ); // Output true
console.log( "sanitizeBoolean(false):", Utils.sanitizeBoolean(false) ); // Output false


// test .isObject()
console.log( "isObject('a'):", Utils.isObject('a') ); // Output false
console.log( "isObject(1):", Utils.isObject(1) ); // Output false
console.log( "isObject(null):", Utils.isObject(null) ); // Output false
console.log( "isObject({'a': 1}):", Utils.isObject({'a': 1}) ); // Output true


// test .keyValueToObject()
var arr_keys = ['field_1', 'field_2'];
var arr_values = ['value_1', 'value_2'];
console.log( "keyValueToObject(arr_keys, arr_values):", Utils.keyValueToObject(arr_keys, arr_values) ); // Output: { field_1: 'value_1', field_2: 'value_2' }
console.log( "keyValueToObject('some_key', 'some_value'):", Utils.keyValueToObject('some_key', 'some_value') ); // Output: { some_key: 'some_value' }


// test .overrideObject()
var base_obj = {'k1':1,'k2':2,'k3':null};
var new_obj = {'k1':null,'k2':100,'k4':4};
var new_obj2 = {'k2':200,'k5':5};
console.log( // Output: { k1: 1, k2: 200, k3: null, k4:4, k5:5 }
  "overrideObject(base_obj,new_obj,new_obj2)",
  Utils.overrideObject(base_obj,new_obj,new_obj2)
);


// Test Custom Error
const my_err = { code: 123, message: "intentional error" };
const my_err2 = { code: 'abc', message: "intentional error" };
const context = 'ytu876rt';
console.log( "Custom Error with context", Utils.error(my_err, context) );
console.log( "Custom Error", Utils.error(my_err2) );


// Test isError
const test_err = Error('this is error');
console.log( "isError - Yes", Utils.isError(test_err) );
console.log( "isError - No", Utils.isError('not error') );


// String Reverse
console.log( "stringReverse('Hello'):", Utils.stringReverse('Hello') ); // Output: olleH


// Test Absentee Keys
const obj_data = {k1:'a', k2:10, k3:null, k5:'b'};
const required_config = {
  'k1':{error:my_err},
  'k3':{error:my_err,not_null:true},
  'k4':{error:my_err},
  'k5':{error:my_err},
};
console.log( // Output: [...]
  "1-absenteeKeysCheckObject(...):",
  Utils.absenteeKeysCheckObject(obj_data, context, required_config,
    ['k1','k3','k4']
  )
);

console.log( // Output: false
  "2-absenteeKeysCheckObject(...):",
  Utils.absenteeKeysCheckObject(obj_data, null, required_config,
    ['k1'],
    {
      'k2':[
        {
          keys: ['k5'],
          values: [10, 15]
        }
      ]
    }
  )
);


// Test Invalid keys - (With Validation Functions)
const validate_k1 = function(k1){ return k1=='a'; }
const validate_k2 = function(k2){ return k2==10; }
const validate_k1_2 = function(k1, k2){ return false; }
const validation_config = [
  {func:validate_k1,params:['k1'],error:my_err},
  {func:validate_k2,params:['k2'],error:my_err},
  {func:validate_k1_2,params:['k1','k2'],error:my_err2},
];
console.log( // Output: [...]
  "invalidKeysCheckObject(with-validation-functions):",
  Utils.invalidKeysCheckObject(obj_data, context, validation_config)
);


// Test Invalid keys - (with InValidation Functions) (Mostly used for Nested Objects)
const deep_obj = {
  'obj_data': obj_data
}
const invalidate_func = function(obj){ // Build a invalidation Function.
  return Utils.invalidKeysCheckObject(obj, context, validation_config);
};
const invalidation_config = [
  { func:invalidate_func,params:['obj_data'] }
];
console.log( // Output: [...]
  "invalidKeysCheckObject(with-invalidation-functions):",
  Utils.invalidKeysCheckObject(deep_obj, context, null, invalidation_config)
);


// isEmpty
console.log( // Output: false
  "isEmpty(false)",
  Utils.isEmpty(false)
);
console.log( // Output: false
  "isEmpty(0)",
  Utils.isEmpty(0)
);
console.log( // Output: true
  "isEmpty('')",
  Utils.isEmpty('')
);
console.log( // Output: true
  "isEmpty(null)",
  Utils.isEmpty(null)
);
console.log( // Output: true
  "isEmpty()", // Undefined
  Utils.isEmpty()
);
console.log( // Output: true
  "isEmpty({})", // Empty Object
  Utils.isEmpty({})
);
console.log( // Output: true
  "isEmpty([])", // Empty Array
  Utils.isEmpty([])
);


// safeJoin
console.log( // Output: 'a-b-c'
  "safeJoin(['a','b','c'],'-')",
  Utils.safeJoin(['a','b','c'],'-')
);
console.log( // Output: ''
  "safeJoin([],'-')",
  Utils.safeJoin([],'-')
);
console.log( // Output: false
  "safeJoin(false,'-')",
  Utils.safeJoin(false,'-')
);
console.log( // Output: null
  "safeJoin(null,'-')",
  Utils.safeJoin(null,'-')
);


// arrayDistint
console.log( // Output: [1, 2, 3, 'a']
  "arrayDistint([1, 2, 2, 3, 3, 3, 'a', 'a'])",
  Utils.arrayDistint([1, 2, 2, 3, 3, 3, 'a', 'a'])
);
console.log( // Output: []]
  "arrayDistint([])",
  Utils.arrayDistint([])
);
console.log( // Output: 'bad input'
  "arrayDistint('bad input')",
  Utils.arrayDistint('bad input')
);
console.log( // Output: null
  "arrayDistint(null)",
  Utils.arrayDistint(null)
);


// splitWithTrim
console.log( // Output: ['a','b','c','','e']
  "splitWithTrim('a,b ,c,, e')",
  Utils.splitWithTrim('a,b,c,,e')
);


// fallback
console.log( // Output: old_val
  "fallback(null, 'old_val')",
  Utils.fallback(null, 'old_val')
);
console.log( // Output: new_val
  "fallback('new_val', 'old_val')",
  Utils.fallback('new_val', 'old_val')
);
console.log( // Output: null
  "fallback(null)",
  Utils.fallback(null)
);


// setNonEmptyKey
var dummy_obj = {};
console.log( // Output: {}
  "setNonEmptyKey(dummy_obj, 'key1')",
  Utils.setNonEmptyKey(dummy_obj, 'key1', null)
);
console.log( // Output: {}
  "setNonEmptyKey(dummy_obj, 'key2', null)",
  Utils.setNonEmptyKey(dummy_obj, 'key2', null)
);
console.log( // Output: {}
  "setNonEmptyKey(dummy_obj, 'key3', null)",
  Utils.setNonEmptyKey(dummy_obj, 'key3', 'something')
);


// sanitizeObject
console.log( // Output: null
  "sanitizeObject('abc', ['k1'])", // Non-Object test
  Utils.sanitizeObject('abc', ['k1'])
);
console.log( // Output: { k1: 'a' }
  "sanitizeObject(obj_data, ['k1'])", // Whitelist Test
  Utils.sanitizeObject(obj_data, ['k1'])
);
console.log( // Output: { k1: 'a' }
  "sanitizeObject(obj_data, null, ['k1'])", // Blacklist test
  Utils.sanitizeObject(obj_data, null, ['k1'])
);


// sanitizeArray
var sanatize_func = function(obj){
  return Utils.sanitizeObject(obj, ['k1']);
}

console.log( // Output: null
  "sanitizeArray(array, sanatize_func)", // Non-Array test
  Utils.sanitizeArray(
    null, // Array is null (Wrong test)
    sanatize_func
  )
);
console.log( // Output: [ { k1: 'a' }, { k1: 'a' } ]
  "sanitizeArray(array, sanatize_func)",
  Utils.sanitizeArray(
    [obj_data, obj_data],
    sanatize_func
  )
);


// Test .disjoinUrl() function
console.log(
  "disjoinUrl('https://subdomain.example.com:8080/abc/pqr/query?param1=apple'):",
  Utils.disjoinUrl('https://subdomain.example.com:8080/abc/pqr/query?param1=apple')
);

console.log( // Username & Password Test
  "disjoinUrl('https://user:pass@example.com/abc'):",
  Utils.disjoinUrl('https://user:pass@example.com/abc')
);

console.log( // Fragment(or hash) Test
  "disjoinUrl('https://example.com/abc#section1'):",
  Utils.disjoinUrl('https://example.com/abc#section1')
);

console.log(
  "disjoinUrl('I am invalid url'):",
  Utils.disjoinUrl('I am invalid url')
);


// Test .disjoinPathname() function
console.log(
  "disjoinPathname('/abc/pqr/query?param1=apple'):",
  Utils.disjoinPathname('/abc/pqr/query?param1=apple')
);

console.log( // Empty
  "disjoinPathname(''):",
  Utils.disjoinPathname('')
);

console.log( // Emply Slashes
  "disjoinPathname('//abc/pqr////query?param1=apple'):",
  Utils.disjoinPathname('//abc/pqr////query?param1=apple')
);


// convertCsvToData
var csv_data = `phone,full_name
+919999999991,John Doe
+919999999992  ,
+919999999993,  Mike

   +919999999994
+91999999,  Mr Wrong`;

console.log( // Output: [{ phone: '+919999999991', full_name: 'John Doe' }, ...]
  "convertCsvToData(csv_data)",
  Utils.convertCsvToData(csv_data)
);


// convertDataToCsv
var data = [
  { phone: '+919999999991', full_name: 'John Doe' },
  { phone: '+919999999992', full_name: undefined },
  { phone: '+919999999993', full_name: 'Mike' },
  { phone: '+919999999994', full_name: undefined },
  { phone: '+91999999', full_name: 'Mr Wrong' }
];

console.log(
  "convertDataToCsv(data)",
  Utils.convertDataToCsv(data)
);


// convertDataToCsv
var feilds = ['phone', 'full_name'];
var data = [
  { phone: '+919999999991', full_name: 'John Doe' },
  { phone: '+919999999992', full_name: undefined },
  { phone: '+919999999993', full_name: 'Mike' },
  { phone: '+919999999994', full_name: undefined },
  { phone: '+91999999', full_name: 'Mr Wrong' }
];

console.log(
  "convertDataToCsv2(feilds, data)",
  Utils.convertDataToCsv2(feilds, data)
);


// moduleAvailable
console.log( // Output: true
  "moduleAvailable('fs')",
  Utils.moduleAvailable('fs')
);

console.log( // Output: false
  "moduleAvailable('fake')",
  Utils.moduleAvailable('fake')
);


// Test deepCopyObject() function
var obj = {
  a: 'abc',
  b: 123,
  c: [ 'x', 1, ['p','q',{e:1}], {f:'*'} ],
  d: { aa:1, bb:{g:1, h:[1,2,'d']}, cc:['x','y','z'] },
  e: new Date('2030-09-16T07:31:13.000Z'),
  f: function(arg){return arg}
};
var obj_copy = Utils.deepCopyObject(obj);
obj_copy['d']['aa'] = 'new';
console.log(
  "deepCopyObject(obj):Orignal",
  obj
);
console.log(
  "deepCopyObject(obj):Copy",
  obj_copy
);
console.log(
  "function test:Copy",
  obj_copy.f('test')
);


// Test compareObjects() function
var obj_a = {
  a: 'abc',
  b: 123,
  c: [ 'x', 1, ['p','q',{e:1}], {f:'*'} ],
  d: { aa:1, bb:{g:1, h:[1,2,'d']}, cc:['x','y','z'] },
  e: new Date('2030-09-16T07:31:13.000Z'),
  f: function(arg){return arg}
};
var obj_b = {
  a: 'abc',
  b: 123,
  c: [ 'x', 1, ['p','q',{e:1}], {f:'*'} ],
  d: { aa:1, bb:{g:1, h:[1,2,'d']}, cc:['x','y','z'] },
  e: new Date('2030-09-16T07:31:13.000Z'),
  f: function(arg){return arg}
};
var obj_c = {
  a: 'abc',
  b: 123,
  c: [ 'x', 1, ['p','q',{e:1}] ], // without {f:'*'}
  d: { aa:1, bb:{g:1, h:[1,2,'d']}, cc:['x','y','z'] },
  e: new Date('2030-09-16T07:31:13.000Z'),
  f: function(arg){return arg}
};
var obj_d = {
  a: 'abc',
  b: 123,
  c: [ 'x', 1, ['p','q',{e:1}], {f:'*'} ],
  d: { aa:1, bb:{g:1, h:[1,2,'d']}, cc:['x','z'] }, // without 'y'
  e: new Date('2030-09-16T07:31:13.000Z'),
  f: function(arg){return arg}
};
var obj_e = {
  a: 'abc',
  b: 123,
  c: [ 'x', 1, ['p','q',{e:1}], {f:'*'} ],
  d: { aa:1, bb:{g:1, h:[1,2,'d']}, cc:['x','y','z'] },
  e: new Date('2030-09-17T07:31:13.000Z'), // Different date
  f: function(arg){return arg}
};
console.log( // Return true
  "compareObjects(obj_a, obj_b)",
  Utils.compareObjects(obj_a, obj_b)
);
console.log( // Return false
  "compareObjects(obj_a, obj_c)",
  Utils.compareObjects(obj_a, obj_c)
);
console.log( // Return false
  "compareObjects(obj_a, obj_d)",
  Utils.compareObjects(obj_a, obj_d)
);
console.log( // Return false
  "compareObjects(obj_a, obj_e)",
  Utils.compareObjects(obj_a, obj_e)
);
console.log( // Return false
  "compareObjects(obj_a, null)",
  Utils.compareObjects(obj_a, null)
);
console.log( // Return true
  "compareObjects(null, null)",
  Utils.compareObjects(null, null)
);


// generateRandomString
console.log( // Output: random 10 chars
  "generateRandomString(10)",
  Utils.generateRandomString(10)
);
console.log( // Output: null
  "generateRandomString(null)",
  Utils.generateRandomString(null)
);
console.log( // Output: null
  "generateRandomString(0)",
  Utils.generateRandomString(0)
);
