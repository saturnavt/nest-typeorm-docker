pipeline {
    agent any
    stages {
        stage('Getch git repo') {
              steps {
                ws("E:/Documents/Software/SATURNAVT/Jenkins/nest-typeorm-docker")// ACA SE EDITA EL NOMBRE DE LA RUTA DONDE VIVIRA EL PROJECTO 
                {
                     git branch: 'main', // ACA SE PONE EL NOMBRE DE LA BRANCH A LA QUE QUERAMOS HACER PULL 
                                                // SI LA RAMA ES RELEASE ESPECIFICAMOS EL NUMERO DE RELEASE EJEMPLO 'release/1' 
                    //  credentialsId: 'd6e0e8',
                     url: 'https://github.com/saturnavt/nest-typeorm-docker.git'
                }
            }
        }
        stage('npm install'){
            steps{
                ws("E:/Documents/Software/SATURNAVT/Jenkins/nest-typeorm-docker")// ACA SE EDITA EL NOMBRE DE LA RUTA DONDE VIVIRA EL PROJECTO  
                {
                 bat 'npm install'
                }
            }
        }
        stage('npm run build'){
            steps{
                ws("E:/Documents/Software/SATURNAVT/Jenkins/nest-typeorm-docker")// ACA SE EDITA EL NOMBRE DE LA RUTA DONDE VIVIRA EL PROJECTO 
                {
                 bat 'npm run build'
                }
            }
        }
        stage('pm2'){
            steps{
               ws("E:/Documents/Software/SATURNAVT/Jenkins/nest-typeorm-docker")// ACA SE EDITA EL NOMBRE DE LA RUTA DONDE VIVIRA EL PROJECTO  
               {
                bat 'pm2 delete pipe_test && pm2 start dist/main.js --name pipe_test && pm2 save || pm2 start dist/main.js --name pipe_test && pm2 save';
               }
            }
        }
    }
}