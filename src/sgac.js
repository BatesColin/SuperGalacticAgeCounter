export class Galactic {
    constructor(ageInYears, birthday = new Date(), lifeExpectancy) {
        this.ageInYears = ageInYears;
        this.birthday = birthday;
        this.lifeExpectancy = lifeExpectancy;
      }
      ageInYearsToSeconds() {
        return this.ageInYears * 31536000;
      }
      dateDifference(date){
        return (date - this.birthday)/1000;
      }
      ageInSeconds() {
        let birthday = new Date(this.birthday);
        return birthday.getTime() / 1000;
      }
    
      ageOnMercury() {
        return getAge(this.birthday) / .24;
      }
    
      ageOnVenus() {
        return getAge(this.birthday) / .62;
      }
    
      ageOnMars() {
        return getAge(this.birthday) / 1.88;
      }
    
      ageOnJupiter() {
        return getAge(this.birthday) / 11.86;
      }
      compareLife() {
        if(this.lifeExpectancy*31536000 >= this.dateDifference(Date.now())){
          return "Your life expectancy is " + this.lifeExpectancy + " years.";
        }
        else
        {
          return "You've lived " + Math.floor((this.dateDifference(Date.now())-this.lifeExpectancy*31536000)/31536000) + " years over your life expectancy of " + this.lifeExpectancy + " years!";
        }
      }
      
    }
    export function dateDifferenceInSeconds(date1, date2) {
        let difference =(date1.getTime() - date2.getTime()) / 1000;
        return Math.floor(Math.round(difference));
      }
      export function getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }