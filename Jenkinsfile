pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.23.0-focal'
        }
    }
    stages {
        stage('install playwright') {
            steps {
                sh '''
                  npm i -D @playwright/test
                  npx playwright install
                '''
            }
        }
        stage('help') {
            steps {
                sh 'npx playwright test --help'
            }
        }
        stage('test') {
            steps {
                sh '''
                  npx plawright test --list
                  npx playwright test
                '''
            }
        }
    }
}