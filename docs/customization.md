
## Colors

## Logo
## Additional CSS and Javascript

=== "CSS"

    If you want to tweak some colors or change the spacing of certain elements, 
    you can do this in a separate stylesheet. The easiest way is by creating a 
    new stylesheet file in the `docs/` directory:
    ```
    ├─ docs/
    │  └─ stylesheets/
    │     └─ extra.css
    └─ mkdocs.yml
    ```
    Then, add the following line to mkdocs.yml:

    ```yaml
    extra_css:
      - stylesheets/extra.css
    ```

=== "Javascript"
    The same is true for additional JavaScript. If you want to integrate 
    another syntax highlighter or add some custom logic to your theme, 
    create a new JavaScript file in the `docs/` directory:
    ```
    .
    ├─ docs/
    │  └─ javascripts/
    │     └─ extra.js
    └─ mkdocs.yml
    ```
    Then, add the following line to mkdocs.yml:

    ```yaml
    extra_css:
      - javascripts/extra.js
    ```


Spin up the live preview server and start typing your changes in your additional stylesheet file – you should see them almost instantly after saving.


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


=== "Bash"

    ```bash
	#!/bin/bash
	ARG=$1

	function mimic {
	  if [[ -z $ARG ]]; then
	    ARG='world'
	  fi
	  echo "hello $ARG"
	}

	mimic $ARG

    ```

=== "Java"

    ```Java
	public class MyClass {
	  int x = 5;

	  public static void main(String[] args) {
	    MyClass myObj = new MyClass();
	    System.out.println(myObj.x);
	  }
	}
    ```

=== "C"

    ```C
	int main(void)
	{
	  RectangleClass r1;

	  rectangle_new_with_lengths(&r1, 4.f, 5.f);
	  printf("rectangle r1's area is %f units square\n", shape_computeArea(&r1));
	  return 0;
	}
    ```

=== "Go"

    ```go
	package employee

	import (  
	    "fmt"
	)

	type employee struct {  
	    firstName   string
	    lastName    string
	    totalLeaves int
	    leavesTaken int
	}

	func New(firstName string, lastName string, totalLeave int, leavesTaken int) employee {  
	    e := employee {firstName, lastName, totalLeave, leavesTaken}
	    return e
	}

	func (e employee) LeavesRemaining() {  
	    fmt.Printf("%s %s has %d leaves remaining\n", e.firstName, e.lastName, (e.totalLeaves - e.leavesTaken))
	}
    ```

