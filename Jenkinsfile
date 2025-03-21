pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/EdwinEras/OlympicFit_project.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                withCredentials([
                    string(credentialsId: 'mongo-uri', variable: 'MONGO_URI'),
                    string(credentialsId: 'mongo-db-name', variable: 'DB_NAME')
                ]) {
                    dir('backend') {
                        sh '''
                        echo "🔍 Debugging: Checking Environment Variables"
                        echo "MONGO_URI=$MONGO_URI"
                        echo "DB_NAME=$DB_NAME"

                        URI=$MONGO_URI DB_NAME=$DB_NAME npm install
                        URI=$MONGO_URI DB_NAME=$DB_NAME npm test -- --watchAll=false --detectOpenHandles --forceExit
                        '''
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start App (optional)') {
            steps {
                dir('frontend') {
                    sh '''
                    echo "Starting the Next.js server in production mode..."
                    nohup npm run start > react-app.log 2>&1 &
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Backend tests passed and frontend built successfully!"
        }
        failure {
            echo "❌ Build or Tests failed!"
        }
    }
}
