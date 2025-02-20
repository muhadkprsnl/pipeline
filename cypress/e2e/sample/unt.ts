

export class cs1 {


    //Selectors  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    dotoption = ':nth-child(1) > .card-body > .card-body2 > [style="display: flex; flex-direction: column;"] > .dropdown > .bi';
    indiCheckbox = ':nth-child(1) > .card-body > .card-body2 > [style="display: flex;"] > .checkbox-label > .checkbox-custom';
    indi2Checkbox = ':nth-child(2) > .card-body > .card-body2 > [style="display: flex;"] > .checkbox-label > .checkbox-custom';
    dltBtn = ':nth-child(1) > .card-body > .w-100 > .mat-ripple';
    dltAllBtn = '.col-md-5 > .btn-outline-dark';
    moreBtn = '.col-md-5 > :nth-child(4)';
    viewReport = ':nth-child(25) > .card-body > .w-100 > .btn-primary';
    copyInvite = '.col-lg-5 > .bd-7';
    filterBtn = '.filter-name';
    addMember = '.mb-5 > .mat-ripple > .bi';
    searchedName = ':nth-child(1) > .card-body';


    visitMembers() {
        cy.wait(1000)
        cy.visit('https://academy-dev.dartle.app/members/list', { failOnStatusCode: false });
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .d-flex > :nth-child(2)').click()
        cy.wait(3000)
    }


    //click Action  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    clickonCopyInvite() {
        cy.get(this.copyInvite).click()
    }

    clickonFilterBtn() {
        cy.get(this.filterBtn).click();
    }

    clickonAddMember() {
        cy.get(this.addMember).click()
    }

    clickon3DotOption() {
        cy.get(this.dotoption).click()
    }

    clickoIndividualCheckbox() {
        cy.get(this.indiCheckbox).click();
    }

    clickonViewReport() {
        cy.get(this.viewReport).click()
    }

    clickonDltBtn() {
        cy.get(this.dltBtn).click()
    }

    // clickonDltAll() {
    //     cy.get(this.dltAllBtn).click()
    // }

    // clickonMore() {
    //     cy.get(this.moreBtn).click()
    // }

    threeoptiondltion() {
        // Select the "Delete" option
        cy.contains('div', 'Delete').click();
    }

    threeopttionResendInvit() {
        // Select the "Delete" option
        cy.contains('div', "Resend Coach's Invitation").click();
    }

    threeopttionAssign() {
        // Select the "Delete" option
        cy.contains('div', "Assign to group").click();
    }

    closeAssignGrpPopup() {
        cy.get('.model-close').click()
    }

    assign_A_Group(index = 1) {
        if (index > 8) {
            cy.log('No unassigned groups available.');
            return;
        }

        cy.get(`.modal-body > :nth-child(${index}) > .btn`).then((button) => {
            if (!button.is(':disabled')) {
                cy.log(`Button ${index} is not assigned. Clicking to assign...`);
                cy.wrap(button).click(); // Assign the group
            } else {
                cy.log(`Button ${index} is already assigned. Checking next group...`);
                this.assign_A_Group(index + 1); // Recursive call for the next button
            }
        });
    }

    confirmDltion() {
        cy.get('.swal2-confirm').click()
    }

    cancelDltion() {
        cy.get('.swal2-cancel').click()
    }



    //other  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    verifyaddNewMembers() {
        cy.url().should('contain', 'https://academy-dev.dartle.app/members/list'); // Ensure login was successful
    }

    verifyCopyInvitation() {
        cy.url().should('contain', 'https://academy-dev.dartle.app/self-registration/6451f714413fa18c66462066');
    }

    storedSearchName: string | undefined;

    searchBar(name: string) {
        this.storedSearchName = name;
        cy.get('.input-group > .form-control')
            .type(name)
        cy.wait(2000)

        // Verify the searched name
        // cy.get(this.searchedName)
        cy.get('.profile-name')
            .invoke('val') // Get the value of the input field
            .should('include', name); // Verify it contains the selected code
    }


    //Toaster  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    toaster = '#toast-container > .ng-trigger'

    copylinkMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Link copied!')
            .and('contain.text', 'The self registration link has been copied to clipboard.');
    }

    resendInvitaionMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Email sent!')
            .and('contain.text', 'Invitation mail have been sent successfully.');
    }

    assignGrpMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Success!')
            .and('contain.text', 'Stare have been successfully added to the group under 16');
    }





    //Assign Group  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    assignGroup = '.assign-group';
    closePopupBtn = '.btn-dark';
    proceedAssignBtn = '.flex-column > .d-flex > .btn-primary';

    clickonAssigngrp() {
        this.clickoIndividualCheckbox();
        cy.get(this.assignGroup).click();
    }

    closeAssignPopup() {
        cy.get(this.closePopupBtn).click();
    }

    clickProceedAssign() {
        cy.get(this.proceedAssignBtn).click();
    }



    //Share Profile   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    shareProfileBtn = '.col-md-5 > :nth-child(1)';
    indicheckboxSelector = '.header-align > .ml-4 > .checkbox-label > .checkbox-custom';
    checkboxinPopup = '.me-4 > .checkbox-custom';
    acctypeBtn = '.header-align > .dropdown > #dropdownClass';
    removeSelectedBtn = "div[class='d-flex justify-content-between m-4'] span:nth-child(1)"
    publicBtn = "div[class='d-flex justify-content-between m-4'] span:nth-child(2)"
    privateBtn = '.pt-2 > .d-flex > :nth-child(3)';
    cancelBtnShareprofile = '.flex-column > .w-100.d-flex > .btn-outline-dark';
    nextBtnshareProfile = '.flex-column > .w-100.d-flex > .btn-primary';
    searchFieldShareProfile = '.table-head > .input-group > .form-control';
    nextPageBtnShareProfile = '.flex-column > .d-flex.mt-3 > [style="padding: 0rem 1.3rem;"]';
    previousPageBtnShareProfile = '.flex-column > .d-flex.mt-3';
    backBtnShareProfile = '.flex-column > .justify-content-between > .btn-outline-dark';
    sendBtnShareProfile = '.flex-column > .justify-content-between > .btn-primary';
    markallAcademiesChkbox = '.me-4 > .checkbox-custom';
    markIndiAcademy = ':nth-child(2) > .checkbox-label > .checkbox-custom';
    confirmSendBtn = '.swal2-confirm';
    cancelSendBtn = '.swal2-cancel';


    clickonShareProfile() {
        cy.get(this.indi2Checkbox).click();
        cy.wait(1000)
        cy.get(this.shareProfileBtn).click();
    }

    markAllInPopup() {
        cy.get(this.checkboxinPopup).click();
    }

    storedIndividualName: string | undefined;

    mark1IndiinPopup() {
        // Click the first checkbox
        cy.get(this.indicheckboxSelector).eq(0).click(); // Index starts at 0

        // Extract and store the marked individual's name
        cy.get('.title-popup').invoke('text').then((name) => {
            this.storedIndividualName = name.trim(); // Trim to remove unnecessary spaces
            cy.log(`Stored Individual Name: ${this.storedIndividualName}`);
        });
    }

    getStoredIndividualName(): string | undefined {
        return this.storedIndividualName;
    }



    mark2IndiinPopup() {
        cy.get(this.indicheckboxSelector).eq(1).click(); // Index starts at 1
    }


    acctype() {
        cy.get(this.acctypeBtn).click();
    }

    removeSelected() {
        cy.get(this.removeSelectedBtn).click();
    }

    changeSelectedtoPub() {
        cy.get(this.publicBtn).click();
    }

    changeSelectedtoPri() {
        cy.get(this.privateBtn).click();
    }

    clickCancelthePopup() {
        cy.get(this.cancelBtnShareprofile).click();
    }

    clickNext() {
        cy.get(this.nextBtnshareProfile).click();
    }

    confirmSend() {
        cy.get(this.confirmSendBtn).click()
    }

    cancelSend() {
        cy.get(this.cancelSendBtn).click()
    }

    clickPrivateBack() {
        cy.get('.flex-column > .justify-content-between > .btn-outline-dark').click();
    }

    clickPrivateSend() {
        cy.get('.flex-column > .justify-content-between > .btn-primary').click();
    }


    mark1IndividualAcademy() {
        cy.get(this.markIndiAcademy).eq(0).click(); // Index starts at 0
    }

    markAllAcademies() {
        cy.get(this.markallAcademiesChkbox).click()
    }

    nextPageinPopup() {
        cy.get('.flex-column > .d-flex.mt-3 > [style="padding: 0rem 1.3rem;"]').click()
    }

    previousPageinPopup() {
        cy.get('.flex-column > .d-flex.mt-3').click()
    }

    markCheckboxInPopup() {
        cy.get('.profile > .checkbox-label > .checkbox-custom').click();
    }


    storedSearchNameInPopup: string | undefined;

    searchAcademyinPrivate(name: string) {
        this.storedSearchNameInPopup = name;

        // Type the name in the search box
        cy.get('.table-head > .input-group > .form-control').type(name);

        // Wait for search results to load
        cy.wait(2000);

        // Verify the searched name
        cy.get('.title-popup')// Ensure this is the correct selector
            .should('be.visible') // Ensure the element is visible
            .invoke('text') // Use 'text' for non-input elements
            .then((actualText) => {
                // Trim extra whitespace and verify the name matches
                expect(actualText.trim()).to.include(name);
            });
    }









    //Toaster - Share Profile
    sendToasterkMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Profiles Sent!')
            .and('contain.text', 'Selected profiles has been sent.');
    }

    //Delete All   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    clickonDltAll() {
        cy.get(this.dltAllBtn).click()
    }



    //Transfer Players   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    transferPlayer = '.col-md-5 > .me-3';
    nameTransferSelector = '.p-4 > .profile > [style="margin: auto 0;"] > .title-popup';
    courseCompletionBtn = "div[class='header-alignn mb-3'] div span[class='slider round']";
    selectAcademyDrpBtn = '.col-md-12 > .form-group > .col-sm-12 > .dropdown > #dropdownClass';
    outsideAcademyField = ':nth-child(4) > .form-group > .col-sm-12 > .form-control';
    alumniCheckbox = '.p-4 > .mb-2 > .ng-untouched';
    allAlumniCheckbox = '.mobile-transfer.mt-4 > .mb-3 > .ng-untouched';
    cancelTransferBtn = '.mobile-transfer.mt-4 > .row > :nth-child(1) > .form-group > .col-sm-12 > .btn'
    confirmTransferBtn = '.mobile-transfer.mt-4 > .row > :nth-child(2) > .form-group > .col-sm-12 > .btn';

    clickMore() {
        cy.get(this.moreBtn).click()
    }


    clickonTransferPlayers() {
        cy.get(this.transferPlayer).click()
    }

    nameTransfer() {
        cy.get(this.nameTransferSelector)
    }

    courseCompletion() {
        cy.get(this.courseCompletionBtn)
            .click({ force: true })

    }

    checkedCourseCompletion() {
        cy.get("div.header-alignn.mb-3 label.switch input[type='checkbox']") // Adjusted selector
            .check({ force: true }) // Check the checkbox
            .should('be.checked'); // Verify it is checked
    }

    unCheckedCourseCompletion() {
        cy.get("div.header-alignn.mb-3 label.switch input[type='checkbox']") // Adjusted selector
            .should('not.be.checked');

    }


    selectDropdown(optionText: string) {
        cy.get(this.selectAcademyDrpBtn).click(); // Click to open dropdown
        cy.get('.col-md-12 > .form-group > .col-sm-12 > .dropdown > .dropdown-menu > .form-control').type(optionText)
        cy.get('.col-md-12 > .form-group > .col-sm-12 > .dropdown > .dropdown-menu > .ng-star-inserted').click();
    }

    // selectDropdown(optionText: string) {
    //     cy.get('#dropdownClass').click(); // Click to open dropdown
    //     cy.get(this.selectAcademyDrpBtn) // Adjust the selector for the dropdown list
    //         .contains(optionText)  // Find the option by text
    //         .click();              // Click on the option
    // }




    clickonOutsideAcademy() {
        cy.get('.col-md-12 > .form-group > .col-sm-12 > .dropdown > .dropdown-menu > .dropdown-item > .btn').click({ force: true })
    }

    enterOutsideAcademyField(academy: string) {
        cy.get(':nth-child(4) > .form-group > .col-sm-12 > .form-control')
            .should('have.attr', 'placeholder', 'Outside academy name/ Email')
            .type(academy)
    }

    clickAlumnicheckbox() {
        cy.get(this.alumniCheckbox).click()
    }

    clickAllAlumnicheckbox() {
        cy.get(this.allAlumniCheckbox).click()
    }

    checkedAlumniCheckbox() {
        cy.get(this.allAlumniCheckbox) // Select checkbox
            .check({ force: true }) // Check the checkbox
            .should('be.checked'); // Verify it is checked
    }

    clickonCancelTransfer() {
        cy.get(this.cancelTransferBtn).click()
    }

    clickonConfirmTransfer() {
        cy.get(this.confirmTransferBtn).click()

    }


    //Toaster >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    transferSuccessMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Transfer successful.')
            .and('contain.text', 'Transfer data submitted successfully.');
    }

    transferDeclineMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Data error')
            .and('contain.text', 'No active members selected for transfer.');
    }



    //Remove Players   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    removePlayersBtn = '.mr-0 > .col-md-5 > :nth-child(1)';
    dltPlayerRemovingBtn = '.header-align-remove > .cursor-pointer > img';
    removeconfirmBtn = '.mobile-remove.mt-4 > .row > :nth-child(2) > .form-group > .col-sm-12 > .mat-ripple';
    cancelRemoveBtn = '.mobile-remove.mt-4 > .row > :nth-child(1) > .form-group > .col-sm-12 > .mat-ripple'
    selectReasonBtn = '.col-12 > #dropdownClass';
    optionalReasonField = ':nth-child(4) > .mr-0 > :nth-child(1) > .mt-3 > .ng-star-inserted > .col-md-12 > .form-group > .col-sm-12 > .form-control';
    markAlumniCheckbox = '.ml-1';
    markAllAlumniCheckbox = '.mb-5 > .ng-untouched';
    removeCOnfirmPopup = '.swal2-confirm';
    remvoeCancelPopup = '.swal2-cancel'

    markTwoPlayers() {
        cy.get(this.indiCheckbox).click();
        cy.get(this.indi2Checkbox).click();

    }

    searchBar1(name: string) {
        cy.get('.input-group > .form-control')
            .type(name)
        cy.wait(2000)
        cy.get(':nth-child(1) > .card-body > .card-body2 > [style="display: flex;"] > .checkbox-label > .checkbox-custom').click();

    }

    clickonRemovePlayers() {
        cy.get(this.removePlayersBtn).click()
    }

    dltPlayerRemoving() {
        cy.get(this.dltPlayerRemovingBtn).first().click();
    }

    selectReason(reason: string) {
        // Ensure parent is visible first
        cy.get('.row.desktop-remove').invoke('show');

        // Click dropdown to open
        cy.get(this.selectReasonBtn).click();

        // Select the reason from the dropdown
        cy.get('.dropdown-menu')
            .should('be.visible', reason)
            .contains(reason)
            .click({ force: true });
    }

    enterReason(desc: string) {
        cy.get(this.optionalReasonField)
            .should('have.attr', 'placeholder', 'Type the reason')
            .type(desc)
    }

    markAddAlumni() {
        cy.get(this.markAlumniCheckbox).click();
    }

    markAllAddAlumni() {
        cy.get(this.markAllAlumniCheckbox).click();
    }

    checkedCheckbox() {
        cy.get(this.markAlumniCheckbox) // Select checkbox
            .check({ force: true }) // Check the checkbox
            .should('be.checked'); // Verify it is checked
    }

    unCheckedCheckbox() {
        cy.get(this.markAlumniCheckbox) // Select checkbox
            .check({ force: true }) // Check the checkbox
            .should('not.be.checked'); // Verify it is checked
    }



    clickonCancelRemove() {
        cy.get(this.cancelRemoveBtn).click()

    }

    clickonConfirmRemove() {
        cy.get(this.removeconfirmBtn).click()

    }

    clickonCancelRemovePopup() {
        cy.get(this.remvoeCancelPopup).click()
    }

    clickonConfirmRemovePopup() {
        cy.get(this.removeCOnfirmPopup).click()
    }




    //Toaster >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    removalSuccessMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Remove successful.')
            .and('contain.text', 'Successfully removed members.');
    }



    //Coach >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    clickonCoach() {
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .d-flex > :nth-child(2)').click()
        cy.wait(2000)
    }






}