import * as assert from 'assert';
import { Sha224Command } from '../src/sha2-command';
import { Sha256Command } from '../src/sha2-command';
import { Sha384Command } from '../src/sha2-command';
import { Sha512Command } from '../src/sha2-command';

suite('SHA1 Tests', () => {
  test('Hash SHA224', () => {
    let command = new Sha224Command();
    assert.equal(
      command.run('message'),
      'ff51ddfabb180148583ba6ac23483acd2d049e7c4fdba6a891419320'
    );
  });
  test('Hash SHA256', () => {
    let command = new Sha256Command();
    assert.equal(
      command.run('message'),
      'ab530a13e45914982b79f9b7e3fba994cfd1f3fb22f71cea1afbf02b460c6d1d'
    );
  });
  test('Hash SHA384', () => {
    let command = new Sha384Command();
    assert.equal(
      command.run('message'),
      '353eb7516a27ef92e96d1a319712d84b902eaa828819e53a8b09af7028103a9978ba8feb6161e33c3619c5da4c4666a5'
    );
  });
  test('Hash SHA512', () => {
    let command = new Sha512Command();
    assert.equal(
      command.run('message'),
      'f8daf57a3347cc4d6b9d575b31fe6077e2cb487f60a96233c08cb479dbf31538cc915ec6d48bdbaa96ddc1a16db4f4f96f37276cfcb3510b8246241770d5952c'
    );
  });
});

