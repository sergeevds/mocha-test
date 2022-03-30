import assert from 'assert';

// =================================================================================

it('two plus two is four', function () {
  assert.equal(2 + 2, 4);
});

it('equal vs strictEqual', () => {
  assert.equal(0, false);
  assert.notStrictEqual(0, false);
})

// =================================================================================

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}
 
 it('compiling android goes as expected', () => {
  assert.throws(() => compileAndroidCode(), Error);
 
  // You can also use the exact error message or a regexp
  assert.throws(compileAndroidCode, /^Error: you are using the wrong JDK$/);
 });
 

// =================================================================================

