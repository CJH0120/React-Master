console.log("안녕하세요");

const student = {
  apple: "김사과",
  banana: "반하나",
  orange: "오렌지",
};

console.log(student);

const { apple, banana, orange } = student;

console.log(apple);
console.log(banana);
console.log(orange);

const user = ["김사과", "반하나", "오렌지"];

const [kim, ban, oh] = user;

console.log(kim);
console.log(ban);
console.log(oh);

const dog = {
  name: "루시",
  age: 11,
  weight: 3.5,
};

function print({ name, age, weight }) {
  console.log(`
    우리집 강아지 이름은 ${name}이고
    나이는 ${age}살이며 몸무게는 ${weight}kg입니다
    `);
}
print(dog);
