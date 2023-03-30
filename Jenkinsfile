pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            sh 'npm install'
          }
        }

        stage('execute') {
          steps {
            sh 'npm run day2'
          }
        }

      }
    }

    stage('close') {
      steps {
        echo 'complete'
      }
    }

  }
}