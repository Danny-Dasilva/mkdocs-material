
## Getting started

Begin by cloning the repo and pathing into it

```console
git clone https://github.com/Danny-Dasilva/mkdocs-material.git && cd mkdocs-material 
```



## Install dependencies 

=== "pipenv"

    In case you __do not__ have pipenv you can install it with
    
    ```
    pip install pipenv
    ```

    Install dependencies with 

    <div class="termy">

	```console
	$ pipenv install

	---> 100%
	```
    </div>
   
    ??? Danger "Warning: Your Pipfile requires python_version 3.8"
        This pipenv file was created using python `3.8` however it is not a requirement to run the package. You can tack 
        on `--python <$your version>` to pipenv in order to run it with that python version. 

        __Example__:

        ```bash
        pipenv install --python 3.7

        ```


=== "docker"

    The [Docker image][1] is a great way to get up and running in a few minutes, as it comes with all dependencies pre-installed. Pull the image for the latest version with:

     <div class="termy">

	```console
	$ docker pull dannydasilva/mkdocs-material

	---> 100%
	```
     </div>

    The mkdocs executable is provided as an entry point and serve is the default command. 
    If you're not familiar with Docker don't worry, the following sections cover how to serve build and deploy.
    
    The following plugins are bundled with the Docker image:
    
    * markdown-include
    * mkdocs-markdownextradata-plugin

    as well as others
    
 
    ??? Info "How can I add plugins to the Docker image?"
        The docker container bundles useful and common plugins on top of the standard mkdocs
        container however if the plugin you want to use is not included, you can 
        create a new Dockerfile and extend the Docker image with your custom installation routine:

        ```dockerfile
        FROM dannydasilva/mkdocs-material
        RUN pip install ...
        ```

        Next, you can build the image with the following command.

        ```
        docker build -t dannydasilva/mkdocs-material .
        ```

        The new image can be used exactly like the default image, the commands below will operate the same.
   


=== "virtualenv or pip"
    Using a virtual environment is not a requirement but is highly suggested. You can install 
    the dependencies on the system with.

    ``` 
    pip install -r requirements.txt
    ```

    If you would prefer to use `virtualenv`  you can install it with 

    ```
    pip install virtualenv
    ```

    create the environment

    ```
    virtualenv venv
    ```

    Activate the environment

    === "Mac OS / Linux"
        ```
        source venv/bin/activate
        ```
    === "windows"
        ```
        venv\Scripts\activate
        ```

    and finally install the dependencies
    
    ```
    pip install -r requirements.txt
    ```

    




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
