
export class internalApiValidateOrders1 {




    // it('Opens the Admin Login Page', () => {
    //   cy.visit(data.AdminURL)
    //   cy.title().should('eq','TCGplayer.com Seller Control Panel - Login/Register')
    //   cy.AdminLogin (data.email, data.password)

    runValidateOrders1() {
       // it('Validate Orders Internal API Job', () => {
        //const job = 'VALIDATEORDERSV2'
        const job = 'PRODUCTSALSOPURCHASEDDICEMASTERS'
        cy.log(job)

        cy.server()
        cy.request({
            method: 'POST',
            url: 'http://services.tcgplayer-stg.com/internalapiSTG/job/start?jn=' + job + '&u=1'
        })
        const isJobRunning = true
        cy.log(isJobRunning)
        cy.wait(5000)

        cy.get('#runningJobs').then(($RunningJobs) => {
        const RunningJobs = $RunningJobs.text()  
        cy.log(RunningJobs)   //delete later
        })

    // //works
    // cy.waitUntil(() => 
    //     //cy.get('tbody > tr > :nth-child(1)').contains('There are no jobs currently running.'), {timeout: 500000})
    //     cy.get('tbody > tr > :nth-child(1)').then($results => 
    //     $results.val()))
    //     cy.log('Wait until done section completed.')


    // cy.waitUntil(              () => 
    // cy.get('tbody > tr > :nth-child(1)').then(              $results =>                  {
    // $results.val('There are no jobs currently running.'),{timeout: 500000}                
    // )


  
    

// wait until the Recaptcha token will be added to the dedicated hidden input field...
cy.waitUntil(() => cy.get('tbody > tr > :nth-child(1)').then($results => //{
    //const RunningJobs = $results.text()
    $results.text("There are no jobs currently running.")))
  // ... then, check that it's valid string asserting about it
 //assert needs work
 // .then(token => expect(token).contains("There are no jobs currently running."));

//}
    
    

        


    // while (let i = 0; i < 3; i++) {





    //     cy.get('#runningJobs').then(($RunningJobs) => {
    //         const RunningJobs = $RunningJobs.text()  
    //         cy.log(RunningJobs)   //delete later
    //          //if ($RunningJobs.text().not.include(job)) {   //does not like this statement
    //             //if ($RunningJobs.text().should('not.visible')) {   //does not like this statement'
    //             //if ($RunningJobs.not.includes(RunningJobs)) {
    //             //if ($RunningJobs.not.visible("11")) {
    //                 cy.log('step 1')   //delete later
    //                 cy.log(RunningJobs)   //delete later
    //            // if (cy.get('#runningJobs') ===  ('There are no jobs currently running.')) {
    //             if (RunningJobs === ('There are no jobs currently running.')) {    
                        
    //            const isJobRunning = false
    //            cy.log(isJobRunning)
    //             } else {
    //                 cy.log('Else statement activated')
    //             }

             
    //     //         // cy.break()
    //     //             else if ($RunningJobs.text().include(job)) {
    //     //             cy.log(Job+' is still running, waiting 10 sec.')  
    //     //             cy.wait(10000)  
    //     //             } else {
    //     //               cy.log('Something went wrong.')
    //     //               fail test
    //     //               }
    //       //  }
    //     //     while end
    //     // }  if isJobRunning = true {
    //     //     cy.log(Job+' is still running.  Failing test.')
    //     //     fail test
    //     // }
    //     })
  //  })
    //}
}

    


}

export const validateOrders1 = new internalApiValidateOrders1()