import './commands'
import addContext from 'mochawesome/addContext'
import '@shelex/cypress-allure-plugin';

Cypress.on("test:after:run", (test, runnable) => {
    
    let videoName = Cypress.spec.name
    videoName = videoName.replace('/.js.*', '.js')
    const videoUrl = 'videos/' + videoName + '.mp4'

    addContext({ test }, videoUrl)
});