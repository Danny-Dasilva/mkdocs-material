## Styling code blocks
This project is licensed under the terms of the MIT license.


Alternatively, if you're running Material for MkDocs from within Docker, use:

=== "Python"

    ```python
	from __future__ import annotations
	from datetime import date

	# random Person
	class Person:
	    def __init__(self, name: str, age: int):
			self.name = name
			self.age = age

	    @classmethod
	    def fromBirthYear(cls, name: str, birthYear: int) -> Person:
			return cls(name, date.today().year - birthYear)

	    def __repr__(self) -> str:
			return f"{self.name}'s age is: {str(self.age)}"

	person = Person('Adam', 19)
	print(person)

	person1 = Person.fromBirthYear('John',  1985)
	print(person1)
    ```

=== "Javacript"

    ```js
	import '/modules/my-module.js';

	class Person {
	  constructor(name, age) {
	    this._name = name;
	    this._age = age;
	  }
	  //unused Method
	  increaseAge() {
	    this._age += 1;
	  }
	}
	var fromBirthYear = (name, age) => {
	  var year = new Date().getFullYear()
	  return new Person(name, year-age)

	}

	const person = new Person("Adam", 19)
	console.log(person)

	const person1 = fromBirthYear('John',  1985)
	console.log(person1)
    ```

=== "HTML"

    ```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<!-- CSS -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
			crossorigin="anonymous">
	</head>
	<body>
		<picture>
			<source type="image/avif" srcset="https://picture-demo.netlify.app/photo.avif">
			<source type="image/webp" srcset="https://picture-demo.netlify.app/photo.webp">
			<img src="https://picture-demo.netlify.app/photo.jpg" alt="Red Panda">
		</picture>
	</body>
	<!-- jQuery and JS bundle w/ Popper.js -->
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous" async></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"
		async></script>
	</html>
    ```

=== "CSS"

    ```css
	:root {
	  --main-bg-color: red;
	}
	.one {
	  color: white;
	  background-color: var(--main-bg-color);
	  margin: 10px;
	  width: 50px;
	  height: 50px;
	  display: inline-block;
	}

	.two {
	  color: white;
	  background-color: var(--main-bg-color);
	  margin: 10px;
	  width: 150px;
	  height: 70px;
	  display: inline-block;
	}
    ```


=== "bash"

    ```
    docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .
    ```

=== "Java"

    ```
    docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .
    ```

=== "C"

    ```
    docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .
    ```

=== "Go"

    ```
    docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .
    ```

