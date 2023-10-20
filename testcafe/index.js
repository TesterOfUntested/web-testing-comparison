import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://demoqa.com/');

test('My first test', async t => {
    await t.expect(Selector("title").innerText).eql('DEMOQA');
});