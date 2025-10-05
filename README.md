# Go Todo App - Kubernetes and GitOps

This repository contains a simple Todo application built with a Go backend, a React frontend, and a MongoDB database. The application is designed to be deployed to a Kubernetes cluster using a GitOps workflow with ArgoCD and GitHub Actions.

## Project Overview

The application consists of three main components:

*   **`auth-service`**: A Go-based microservice that handles user authentication and authorization. It provides RESTful APIs for user registration, login, and token validation.
*   **`frontend`**: A React-based single-page application (SPA) that provides the user interface for the Todo application. It communicates with the `auth-service` to authenticate users and manage their sessions.
*   **`MongoDB`**: A NoSQL database used to store user data and todo items.

## Technologies Used

*   **Backend**: Go
*   **Frontend**: React, Vite
*   **Database**: MongoDB
*   **Containerization**: Docker
*   **Orchestration**: Kubernetes
*   **GitOps**: ArgoCD
*   **CI/CD**: GitHub Actions

## Getting Started

To run this project locally, you will need to have the following installed:

*   Docker
*   Node.js and npm
*   Go

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/SAYEM-16T/go-todo-k8s.git
    cd go-todo-k8s
    ```

2.  **Set up the environment variables**:

    Create a `.env` file in the `auth-service` directory and add the following environment variables:

    ```
    MONGO_URI=mongodb://localhost:27017
    DB_NAME=todoapp
    JWT_SECRET=your-jwt-secret
    ```

3.  **Run the application**:

    You can use Docker Compose to run the entire application stack locally:

    ```bash
    docker-compose up -d
    ```

    This will start the `auth-service`, `frontend`, and MongoDB database. The frontend will be available at `http://localhost:3000`.

## Deployment

This project uses a GitOps workflow for deployment. The workflow is orchestrated by ArgoCD and GitHub Actions.

1.  **CI/CD Pipeline**:

    The CI/CD pipeline is defined in the `.github/workflows/deploy.yml` file. The pipeline is triggered on every push to the `main` branch and performs the following steps:

    *   Builds and pushes the Docker images for the `auth-service` and `frontend` to a Docker registry.
    *   Clones the GitOps repository.
    *   Updates the Kubernetes manifests in the GitOps repository with the new Docker image tags.
    *   Pushes the changes to the GitOps repository.

2.  **ArgoCD**:

    ArgoCD is used to continuously monitor the GitOps repository and apply the Kubernetes manifests to the cluster. The ArgoCD application is defined in the `.argocd/application.yaml` file.

    To deploy the application to your Kubernetes cluster, you will need to:

    *   Install ArgoCD on your cluster.
    *   Create a new ArgoCD application using the `application.yaml` file in this repository.
    *   Update the `repoURL` in the `application.yaml` file to point to your GitOps repository.

## Directory Structure

```
/
├── .argocd/
│   └── application.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── auth-service/
│   ├── Dockerfile
│   ├── go.mod
│   ├── go.sum
│   └── main.go
└── frontend/
    ├── Dockerfile
    ├── index.html
    ├── nginx.conf
    ├── package.json
    └── src/
```

*   **`.argocd/`**: Contains the ArgoCD application manifest.
*   **`.github/`**: Contains the GitHub Actions workflow for CI/CD.
*   **`auth-service/`**: Contains the Go backend for the authentication service.
*   **`frontend/`**: Contains the React frontend application.