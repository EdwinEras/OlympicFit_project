pipeline {
    agent any

    environment {
        NODEJS_HOME = '/usr/bin'
        PATH = "${NODEJS_HOME}:${PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/EdwinEras/OlympicFit_project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {  // Navigate to frontend folder
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo "React App Build Successful!"
        }
        failure {
            echo "Build Failed!"
        }
    }
}
