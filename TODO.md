# TODO things

Due to the time constrain of 7-8 hours, I got a basic set up running plus some small features to show what can be done if exploited according to different requirements. I've used kustomize, splitted kubernetes manifests to template them and scale them through overlays, in the local set up I added some networks to share internal DNS between the backend and postgres to avoid exposing postgres, etc. Things that I could have done to improve this challenge if I would have more time are:

- Set up multiple replicas for the services (I put 1 because the GKE cluster is very small) to make them High Available.
- Addition of proper liveness and readiness probes to K8s deployments.
- Addition of Horizontal Pod Autoscaling to support high loads.
- Setting up a Jenkins/Spinnaker/Octopus/Concourse/Team City client to centralize CI and CD tasks.
- Creation a secret management tool such as Vault.
- Split FE from BE into different repositories to be able to manage them through different pipelines.
- Introduce security vulnerabilities scan to generated docker images.
- Added some lint rules to code (SonarQube perhaps).
- Implementing monitoring and alerting to the stack (through Prometheus & Grafana or New Relic if there is a license for that).
- Adding a logging stack, either EFK or stackdriver (because it's in Google).
- Spin up the whole cluster in an automated fashion using ansible.
- Adding Atlantis for TF scripts via Github PRs.
- Creation of granular RBAC rules through all the tools and processes.
