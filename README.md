# Go Todo App - Kubernetes and ArgoCD Setup

This repository contains the Kubernetes and ArgoCD setup for a simple Todo application. The application consists of a Go backend for authentication, a React frontend, and a MongoDB database.

## File Structure

```
go-todo-k8s/
├── auth-service/
│   ├── Dockerfile
│   ├── go.mod
│   ├── go.sum
│   └── main.go
│
├── frontend/
│   ├── Dockerfile
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│
├── manifests/
│   ├── namespace.yaml
│   ├── mongo/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   ├── auth-service/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   ├── frontend/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── ingress/
│       └── ingress.yaml
│
└── .argocd/
    └── application.yaml
```

### Components

*   **`auth-service/`**: Contains the Go authentication service, including its Dockerfile.
*   **`frontend/`**: Contains the React frontend application, including its Dockerfile and Nginx configuration.
*   **`manifests/`**: Contains all the Kubernetes manifests for the application.
    *   **`namespace.yaml`**: Creates the `go-todo` namespace.
    *   **`mongo/`**: Contains the deployment and service for MongoDB.
    *   **`auth-service/`**: Contains the deployment and service for the Go authentication service.
    *   **`frontend/`**: Contains the deployment and service for the React frontend.
    *   **`ingress/`**: Contains the Ingress resource to expose the frontend.
*   **`.argocd/`**: Contains the ArgoCD application manifest.
    *   **`application.yaml`**: Defines the ArgoCD application that syncs the manifests to the Kubernetes cluster.

## Getting Started

1.  **Replace Placeholders**:
    *   In `manifests/auth-service/deployment.yaml` and `manifests/frontend/deployment.yaml`, replace `<YOUR_DOCKER_HUB_USERNAME>` with your Docker Hub username.
    *   In `.argocd/application.yaml`, replace `<YOUR_GITHUB_USERNAME>` with your GitHub username.

2.  **Build and Push Docker Images**:
    *   Build and push the Docker images for the `auth-service` and `frontend` to your Docker Hub registry.
    ```bash
    # For auth-service
    docker build -t <YOUR_DOCKER_HUB_USERNAME>/auth-service:latest auth-service/
    docker push <YOUR_DOCKER_HUB_USERNAME>/auth-service:latest

    # For frontend
    docker build -t <YOUR_DOCKER_HUB_USERNAME>/frontend:latest frontend/
    docker push <YOUR_DOCKER_HUB_USERNAME>/frontend:latest
    ```

3.  **Push to GitHub**:
    *   Push the `go-todo-k8s` directory to a new GitHub repository.

4.  **Deploy with ArgoCD**:
    *   Apply the `application.yaml` to your ArgoCD instance.
    ```bash
    kubectl apply -f .argocd/application.yaml
    ```
