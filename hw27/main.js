// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.rating = [];
    this.attendance = Array(25);
  }

  grades(grades) {
    this.rating.push(grades);
  }

  showAverageRating() {
    const addRating = this.rating.reduce((acc, curr) => {
      return acc + curr;
    });
    const averageRating = (addRating / this.rating.length).toFixed(2);
    return averageRating;
  }

  showAge() {
    console.log(2023 - this.year);
  }

  present() {
    if (typeof this.attendance[24] !== "boolean") {
      this.attendance.pop();
      this.attendance.unshift(true);
    } else {
      console.log("Array is full!");
    }
  }

  absent() {
    if (typeof this.attendance[24] !== "boolean") {
      this.attendance.pop();
      this.attendance.unshift(false);
    } else {
      console.log("Array is full!");
    }
  }

  attend() {
    const countLessons = this.attendance.filter((elem) => elem !== undefined);
    const trueInCountLesson = countLessons.filter((elem) => elem === true);
    const countVisiedLesson = (
      trueInCountLesson.length / countLessons.length
    ).toFixed(2);
    return countVisiedLesson;
  }

  summary() {
    if (this.showAverageRating() > 90 && this.attend() > 0.9) {
      return "Very good!";
    } else if (this.showAverageRating() < 90 || this.attend() < 0.9) {
      return "Good, but you can better!";
    } else if (this.showAverageRating() < 90 && this.attend() < 0.9) {
      return "Very bad!";
    }
  }
}

const studentFirst = new Student("Bob", "Black", 2004);

studentFirst.grades(100);
studentFirst.grades(99);
studentFirst.grades(100);
studentFirst.grades(100);
studentFirst.grades(95);

studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.present();
studentFirst.absent();

studentFirst.showAge();
console.log(studentFirst.showAverageRating());
console.log(studentFirst.summary());
console.log(studentFirst);

const studentSecond = new Student("Nick", "White", 1999);

studentSecond.grades(100);
studentSecond.grades(99);
studentSecond.grades(90);

studentSecond.present();
studentSecond.absent();
studentSecond.absent();

studentSecond.showAge();
console.log(studentSecond.showAverageRating());
console.log(studentSecond.summary());
console.log(studentSecond);

const studentThird = new Student("Jane", "Yellow", 2000);

studentThird.grades(100);
studentThird.grades(100);
studentThird.grades(100);

studentThird.present();
studentThird.present();
studentThird.present();

studentThird.showAge();
console.log(studentThird.showAverageRating());
console.log(studentThird.summary());
console.log(studentThird);
