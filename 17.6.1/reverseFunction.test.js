import { reverseWord } from "./reverseFunction";
import 'core-js/modules/es.array.reverse.js';


describe('test reverseWord function', () => {
    it('test one word0', () => {
        const result = reverseWord('Expelliarmus');
        expect(result).toBe('sumraillepxE')
    })
})