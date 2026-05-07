# Architecture Notes

This repository separates application code from deployment definitions.

- `app/` contains the Node.js service.
- `helm/` contains the desired Kubernetes state.
- `argocd/` contains the Argo CD Application object.
- `.github/workflows/` contains image automation.

## Interview explanation

"I built this project to learn how Git becomes the source of truth for application deployment. The app is packaged into a container, pushed to a registry, and deployed to Kubernetes using Helm. Argo CD watches the Git repository and keeps the cluster synchronized with the desired state."
