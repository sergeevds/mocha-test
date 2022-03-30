import assert from 'assert';

const fetchData = () => Promise.resolve('peanut butter');
const fetchDataWithError = () => Promise.reject('error');

it('the data is peanut butter promise styled', () => {
  return fetchData().then(data => {
    assert.strictEqual(data, 'peanut butter');
  });
});
 
it('the data is peanut butter async / await styled', async () => {
  const data = await fetchData();
  assert.strictEqual(data, 'peanut butter');
});


it('the fetch does not reject', () => {
  return assert.doesNotReject(fetchData);
});

it('the fetch fails with an error', () => {
  return assert.rejects(fetchDataWithError);
});
 