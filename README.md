# Clevertech Devops Exercise

This exercise is to assess your technical proficiency with Software Engineering, DevOps and Infrastructure tasks.
There is no need to do all the exercises, but try to get as much done as you can, so we can get a good feel of your skill set. Don't be afraid to step outside your comfort-zone and try something new.

This exercise is split in several subtasks. We are curious to see where you feel most comfortable and where you struggle.

If you have any questions, feel free to reach out to us.

## 1. Create a repository for your response

* Create a github repository and make it **private**.
* Share your repository with the user **@gonrial**.
* Make sure that you grant this user the `Read` role, so that our reviewers can check out the code using Git.

## 2. Dockerize applications

Automate the setup of frontend, backend and database with Docker, so it can be run everywhere comfortably with one or two commands.

* Create the dockerfiles for frontend, backend applications.
* If you never dockerized a javascript project take these pointers into account:
  * You can use any of the `node:12` images.
  * The dependencies in these projects are installed using `yarn`.
  * There is a non-root user called `node` that is not activated by default.
  * You can use any internal folder location.
  * The `CMD` in both cases should be `yarn start`.
  * Ignore `node_modules` folder. Summary: node modules can have binary dependencies and OSX and Linux are not compatible.
* Create a PostgreSQL container and the files in the `db` folder will help you to initialize the database.
* Create a docker-compose so developers can locally launch the project.

### Extra points

* Create a multi-stage docker for the frontend.

Note: `yarn build` will create a `build` folder with a static site that can be loaded into an nginx image.

### 3. Infrastructure as Code

To launch the application we will need an external PostgreSQL server.

* Create a deploy definition that can create the resources in any of the cloud providers (any of your choosing) using the tool you feel comfortable with (Cloudformation, Terraform, AWS CDK, Pulumi, etc)

## 4. Deploy to Kubernetes

Enable your Docker containers to be deployed on a Kubernetes cluster.

* Don't have a Kubernetes cluster to test against?
  * [MiniKube](https://kubernetes.io/docs/setup/minikube/) (free, local)
  * [GKE](https://cloud.google.com/kubernetes-engine/) (more realistic deployment, may cost something)
* Remember that all scripts and code should be runnable either on Linux or MacOS.

### 5. Whatever you can think of

Do you have more ideas to optimize your workflow or automate deployment? Feel free to go wild and surprise us with your solutions.
