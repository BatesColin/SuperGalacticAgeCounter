import { Galactic } from '../src/sgac';

describe('Galactic', function() {

    it('will convert a players age in years to seconds',function(){
     
        let newAge = new Galactic('3')
        let seconds = newAge.ageInYearsToSeconds();
        expect(seconds).toEqual(94608000);
    })

    it('will take 2 dates and determine the difference in seconds',function(){
        let birthday = new Date('1990-08-25');
        let futureDate = new Date('1999-08-25')
        let newAge = new Galactic(0, birthday );
        debugger;
        expect(newAge.dateDifference(futureDate)).toEqual(283996800);
    })

    it('will convert a players age on earth to thier age on Mercury',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Galactic(7, birthday);
        expect(Math.floor(newAge.ageOnMercury(futureDate))).toEqual(200)
    })

    it('will convert a players age on earth to thier age on Venus',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Galactic(4, birthday);
        expect(Math.floor(newAge.ageOnVenus(futureDate))).toEqual(77);
    })

    it('will convert a players age on Earth to thier age on Mars',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Galactic(3, birthday);
        expect(Math.floor(newAge.ageOnMars(futureDate))).toEqual(25);
    })

    it('will convert a players age on Earth to thier age on Jupiter',function(){
        let birthday = new Date('1999-08-19');
        let futureDate = new Date('1999-09-02');
        let newAge = new Galactic(22, birthday);
        expect(Math.floor(newAge.ageOnJupiter(futureDate))).toEqual(4);
    })
    it('will tell a user how long they have left to live', function(){
        let lifeExpectancy = 77;
        let birthday = new Date('1990-08-19');
        let newAge = new Galactic(25, birthday, lifeExpectancy);
        let timeLeftMercury = lifeExpectancy-newAge.ageOnMercury();
        let timeLeftVenus = lifeExpectancy-newAge.ageOnVenus();
        let timeLeftMars = lifeExpectancy-newAge.ageOnMars();
        let timeLeftJupiter = lifeExpectancy-newAge.ageOnJupiter();

        expect(Math.floor(timeLeftMercury)).toEqual(3)
        expect(Math.floor(timeLeftVenus)).toEqual(3)
        expect(Math.floor(timeLeftMars)).toEqual(3)
        expect(Math.floor(timeLeftJupiter)).toEqual(3)
    })
    it('will tell a person ho far past thier life expectancy they are', function(){
        let lifeExpectancy = 77;
        let birthday = new Date('1990-08-19');
        let newAge = new Galactic(85, birthday, lifeExpectancy);
        let timeOver = newAge.compareLife();
        expect(timeOver).toEqual("You've lived")
    })
})