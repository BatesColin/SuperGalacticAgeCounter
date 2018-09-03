import { Galactic } from '../src/sgac';

describe('Galactic', function() {

    it('will convert a players age in years to seconds',function(){
     
        let seconds = new age('25')
        let 
    })

    it('will take 2 dates and determine the difference in seconds',function(){
        let birthday = new Date('1990-08-25');
        let futureDate = new Date('1999-12-31')
        let newAge = new Age(0, );
        expect(newAge.timeDifference(futureDate)).toEqual(345600);
    })

    it('will convert a players age on earth to thier age on Mercury',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Age(birthday, 5, 5);
        expect(newAge.toMercury(futureDate)).toEqual(4680000)
    })

    it('will convert a players age on earth to thier age on Venus',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Age(birthday, 5, 5);
        expect(newAge.toVenus(futureDate)).toEqual(1811613);
    })

    it('will convert a players age on Earth to thier age on Mars',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Age(birthday, 5, 5);
        expect(newAge.toMars(futureDate)).toEqual(597447);
    })

    it('will convert a players age on Earth to thier age on Jupiter',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Age(birthday, 5, 5);
        expect(newAge.toJupiter(futureDate)).toEqual(94709);
    })
}