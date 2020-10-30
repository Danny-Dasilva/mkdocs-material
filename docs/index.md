






start by cloning the repo

add bash thing here

## Install dependencies 
=== "pipenv"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```
=== "docker"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```
=== "virtualenv or pip"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```



### with pipenv
python versioning

### with docker

The [Docker image][1] is a great way to get up and running in a few minutes, as it comes with all dependencies pre-installed. Pull the image for the latest version with:

`docker pull dannydasilva/mkdocs-material`

The mkdocs executable is provided as an entry point and serve is the default command. 
If you're not familiar with Docker don't worry, the following sections cover how to serve build and deploy.

The following plugins are bundled with the Docker image:

* markdown-include
* mkdocs-markdownextradata-plugin

HFHHFHHFHHOW CN I ADD PLUGINS



### with virtualenv or pip 

pip install -r mkdocs-material/requirements.txt

## Make changes

Feel free to make changes to the index.md or add your own files.

explanation of yaml and paths here



## Run Build or deploy 

While you are editing your content you can see a live preview. The server
will automatically rebuild upon saving. You can start that with 

tri split 
### with pipenv
`pipenv run mkdocs serve`
### with docker


Mount the folder where your mkdocs.yml resides as a volume into /docs:

*Start development server on http://localhost:8000

`docker run --rm -it -p 8000:8000 -v ${PWD}:/docs dannydasilva/mkdocs-material`

* Build Documentation

`docker run --rm -it -v ${PWD}:/docs dannydasilva/mkdocs-material build`

* Deploy documentation to GitHub Pages

`docker run --rm -it -v ~/.ssh:/root/.ssh -v ${PWD}:/docs dannydasilva/mkdocs-material gh-deploy `

`docker build -t dannydasilva/mkdocs-material .`



### with virtualenv or pip 
