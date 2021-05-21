pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('pm2'){
            steps{
               
                bat 'pm2 delete pipe_test && pm2 start dist/main.js --name pipe_test && pm2 save || pm2 start dist/main.js --name pipe_test && pm2 save';
                // script{
                //     pm2 = bat 'pm2 pid pipe_test';
                //     if(pm2 == ""){
                //         bat 'pm2 start dist/main.js --name pipe_test && pm2 save -f';
                //     }else{
                //       bat 'pm2 delete pipe_test && pm2 start dist/main.js --name pipe_test && pm2 save';
                //     }
                // }
               
            }
        }
    }
}