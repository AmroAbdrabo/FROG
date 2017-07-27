import check from '../validateProducts';

const objid = {
  Id: { id: 'Id', title: 'string', content: 'string', url: 'URL' }
};
const ary = [{ id: 'Id', title: 'string', content: 'string', url: 'URL' }];

const toObj = ary => ary.reduce((acc, x) => ({ ...acc, [x.id]: x }), {});
const toAry = obj => Object.keys(obj).map(x => obj[x]);

const objexample = {
  aa: { id: 'aa', title: 'hello', content: 'hi', url: 'https://youtube.com' },
  bb: { id: 'bb', title: 'hi', content: 'wow', url: 'https://google.com' }
};

const aryexample = [
  { content: 'hi', id: 'aa', title: 'hello', url: 'https://youtube.com' },
  { content: 'wow', id: 'bb', title: 'hi', url: 'https://google.com' }
];

test('toAry can transform objexample to aryexample', () => {
  expect(toAry(objexample)).toEqual(aryexample);
});
test('toObj can transform aryexample to objexample', () => {
  expect(toObj(aryexample)).toEqual(objexample);
});

test('toObj and toAry are idempotent', () => {
  expect(toAry(toObj(toAry(toObj(aryexample))))).toEqual(aryexample);
});

test('toObj can transform aryid', () => {
  expect(toAry(objid)).toEqual(ary);
});

test('toAry can transform objid', () => {
  expect(toObj(ary)).toEqual(objid);
});

test('toAry and toObj are idempotent with types', () => {
  expect(toAry(toObj(toAry(toObj(ary))))).toEqual(ary);
});
