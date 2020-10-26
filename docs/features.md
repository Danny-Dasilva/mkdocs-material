
## Markdown Basics

the following content is borrowed for mkdocs with some features comming from fastapi

##Bash terminal

Using `termynal.js` and `termynal.css` in `/docs/js` and `/docs/js` respectively we can show
terminal output. By wraping a `console` code block in a `div` tag with `class="termy"` you can 
display a loading promt as well as example output in your markdown files. This termynal styling
is provided courtesy of <a href="https://github.com/tiangolo/fastapi/tree/master/docs" class="external-link" target="_blank">FastApi</a>


````markdown
<div class="termy">

```console
$ some_example_command.sh

---> 100%
INFO:     Started server process [28722]
INFO:     Application startup complete.
```

</div>
````

<div class="termy">

```console
$ some_example_command.sh

---> 100%
INFO:     Started server process [28722]
INFO:     Application startup complete.
```

</div>


##Code Blocks
[:octicons-file-code-24: Source][2] · [:octicons-workflow-24: Extension][3] ·
:octicons-zap-24: Supersedes: [CodeHilite][4]

The [Highlight][3] extension, which is part of [Python Markdown Extensions][5],
integrates with Material for MkDocs and provides several options for
configuring syntax highlighting of code blocks, to see documentation on setting up
configuration see the <a href="https://squidfunk.github.io/mkdocs-material/reference/code-blocks/" class="external-link" target="_blank">mkdocs-material documentation</a> 

    
### Usage

Code blocks must be enclosed with two separate lines containing three backticks.
To add code highlighting to those blocks, add the language short name directly
after the opening block. See the [list of available lexers][17] to find the
short name for a given language.

_Example_:

```` markdown
``` python
import tensorflow as tf
```
````

_Result_:

``` python
import tensorflow as tf
```

### Adding line numbers

Line numbers can be added to a code block by using the `linenums="<start>"`
option directly after the short name, whereas `<start>` represents the starting
line number. A code block can start from a line number other than `1`, which
allows splitting large code blocks for readability.

_Example_:

```` markdown hl_lines="2 3"
``` python linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
````

_Result_:

``` python linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

??? Info "Starting at a different line number"
    The number passed into `#!python range()` will be the start of the line
    _Example_:

    ```` markdown
    ``` python linenums="7"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```
    ````

    _Result_:

    ``` python linenums="7"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```


### Highlighting specific lines

Specific lines can be highlighted by passing the line numbers to the `hl_lines`
argument placed right after the language short name. Note that line counts start
at `1`, regardless of the starting line number specified as part of `linenums`.

_Example_:

```` markdown
``` python hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
````

_Result_:

``` python hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

??? Tip "Highlighting inline code"
    With [InlineHilite][18] enabled, inline code blocks can be highlighted by
    prefixing them with a shebang-like sequence, i.e. `#!`, directly followed by
    the short language name [17].

    _Example_:

    ``` markdown
    The `#!python range()` function is used to generate a sequence of numbers.
    ```

    _Result_:

    The `#!python range()` function is used to generate a sequence of numbers.

    [18]: #inlinehilite

##Admonitions
[:octicons-file-code-24: Source][1] · [:octicons-workflow-24: Extension][2]

Admonitions, also known as call-outs, are an excellent choice for including side content without significantly interrupting the document flow. Material for MkDocs provides several different types of admonitions and allows for the inclusion and nesting of arbitrary content.



####collapsible


## Images


### Image captions


<details markdown="1">
<summary>Load Images faster</summary>

Image Lazy loading 
**Note**:

If you don't know, check the _"In a hurry?"_ section about <a href="https://fastapi.tiangolo.com/async/#in-a-hurry" target="_blank">`async` and `await` in the docs</a>.

</details>

## Content tabs

Sometimes, it's desirable to group alternative content under different tabs, e.g. when describing how to access an API from different languages or environments. Material for MkDocs allows for beautiful and functional tabs, grouping code blocks and other content
<a href="https://squidfunk.github.io/mkdocs-material/reference/content-tabs/" class="external-link" target="_blank">see example docs</a>.

_Example_:

```
=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
```

_Result_:

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```


??? Tip "Grouping other content"
    With [InlineHilite][18] enabled, inline code blocks can be highlighted by
    prefixing them with a shebang-like sequence, i.e. `#!`, directly followed by
    the short language name [17].

    _Example_:

    ````markdown
    === "Example Content"

        ### Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet

        `Lorem ipsum dolor sit amet`

    === "Ordered list"

        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci
    ````

    _Result_:

    === "Example Content"

        ### Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet

        `Lorem ipsum dolor sit amet`

    === "Ordered list"

        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci




## Icons

* :material-material-design: – [Material Design][8]
* :fontawesome-brands-font-awesome-flag: – [FontAwesome][9]
* :octicons-mark-github-16: – [Octicons][10]


## Data tables



## Footnotes
  [1]: https://pygments.org
  [2]: https://github.com/squidfunk/mkdocs-material/blob/master/src/assets/stylesheets/main/extensions/pymdownx/_highlight.scss
  [3]: https://facelessuser.github.io/pymdown-extensions/extensions/highlight/
  [4]: https://python-markdown.github.io/extensions/code_hilite/
  [17]: https://pygments.org/docs/lexers/
  [18]: https://squidfunk.github.io/mkdocs-material/reference/code-blocks/#inlinehilite