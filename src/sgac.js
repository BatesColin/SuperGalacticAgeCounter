export class Galactic {
    constructor(ageInYears, birthday = new Date(), lifeExpectancy) {
        this.ageInYears = ageInYears;
        this.birthday = birthday;
        this.lifeExpectancy = lifeExpectancy;
      }
      ageInYearsToSeconds() {
        return this.ageInYears * 31536000;
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
    }