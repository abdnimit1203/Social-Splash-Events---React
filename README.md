# SOCIAL SPLASH EVENTS

A place to find all your your social events.

## Live netlify server will be here

- [Social Splash](https://social-splash-events-b8a9-abd.netlify.app/)

## SITE FEATURES & Functionalities

- feature_1 : This website lets you choose between 6 different category of social event each different from another!

- feature_2 : You can click on view details card to view a single event service and see exclusive deals on that event.

- feature_3 : You can register for a user account . Keep that in mind **Photo Url** is optional . But username , email and password is required. You can also **Log In** using your created email data and view single event details and other private pages.

- feature_4 : Password on register has some few requirements like , The password

must be more than 6 characters
must have a capital letter
must have a special character

- feature_5 : You can also log in with **Google authentication Log in** . You dont have to provide data for that .

- feature_6 : You will have a profile data on top of navbar after log in. You will see a sign out button + a Edit profile button, where you can edit your display name and picture by providing proper url.

## QUIZ ANSWERS are given below

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: undefined

<i>Because here it is printing **greetign**  which is not initialized. **greeting** has been initialized. If it wasn't for the spelling mistake answer would have been **A** . So as it is logging the data **greetign** which is not initialed so it will print undefined </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>As the number we are passing is one numerical and another string , Javascript will automatically concat the two value sum. It won;t be numerical. Javscirpt will simply concat these two and return a strng. So the answer is **"12"**</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Original Array didn't changed. Because the variable was set inside an object and it is separated from the array as info is another object. food[0] just tooked the value not the variable was stored but the value only. SO changing the on=bject won;t change the array!</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Its a type error at first . As the function is taking a varible and printing it inside template string. It is calling itself (without any arguement) rather than providing a value. So name becomes undefined while printing.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Count is  = 0 first , forEach method iterates values of the array one by one. the array has 4 values and each time it will add 1 to it. So the count should have printed 4 but the **if** condition here is checking truthy and falsy. We know 0 is a falsy value. So for zero count +=1 will not iterate. But for other 3 times it will as they are all truthy values. So the answer is C:3 </i>

</p>
</details>
