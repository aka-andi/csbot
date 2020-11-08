require('jest-discord/expect');

describe('Ping', () => {
    test('response', async () => {
      const response = await prompt('!alerts');
      expect(response).toBeMessage('Career opportunity alerts are now ON');
    });
  });