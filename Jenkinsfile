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
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('frontend') {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Build Next.js App') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start App Locally') {
            steps {
                dir('frontend') {
                    sh 'nohup npx serve -s out -l 3000 > react-app.log 2>&1 &'
                }
            }
        }
    }

    post {
        success {
            echo "✅ Next.js App Built, Tested, and Started Successfully!"
        }
        failure {
            echo "❌ Build or Tests Failed!"
        }
    }
}

