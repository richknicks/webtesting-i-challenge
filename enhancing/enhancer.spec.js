const enhancer = require('./enhancer.js');
const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!
// Initial Test
it("should run the tests", function() {
    expect(true).toBe(true);
  });
describe('enhancer.js', () => {
    describe('.repair()', () => {
        it('returns item durability to 100', () => {
          
            expect(repair({ durability: 10 }).durability).toBe(100);
            expect(repair({ durability: 19 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
        })
    });
    describe('.succeed()', () => {
        it('should return an item with an increased enhancement level of + 1', () => {
   
              expect(succeed({ enhancement: 10 }).enhancement).toBe(11);
              expect(succeed({ enhancement: 19 }).enhancement).toBe(20);
              expect(succeed({ enhancement: 20 }).enhancement).toBe(20);
        })})
        describe('.fail()', () => {
            it('If you fail, it breaks your stuff', () => {
                expect(fail({ enhancement: 10, durability: 10 }).durability).toBe(5);
                expect(fail({ enhancement: 15, durability: 20 }).durability).toBe(10);
                expect(fail({ enhancement: 20, durability: 20 }).durability).toBe(19);
            })})
        describe('.get()', () => {
            it('displays enhanced goodies', () => {
                expect(get({ enhancement: 10, name: 'hammer'}).name).toBe('[+10] hammer');
                expect(get({ enhancement: 15, name: 'sword'}).name).toBe('[+15] sword');
                expect(get({ enhancement: 20, name: 'mace'}).name).toBe('[+20] mace');
            })})
})