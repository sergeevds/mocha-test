import assert from 'assert'
import axios from 'axios';

import sinon from 'sinon'
import Users from '../user.api';


it('should fetch users', async () => {
  const users = [{name: 'Bob'}];
  
  const usersApiMock = sinon.stub(axios, "get");
  usersApiMock.returns(Promise.resolve({ data: users }))

  const response = await Users.all();
  assert.deepEqual(response, users)

});
 