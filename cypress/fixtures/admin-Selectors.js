
    export const login ={
        emailInput:'[data-cy="email_field"]',
        emailText:'salamilayor@gmail.com',
        emailText2:'olasarah13@gmail.com',
        passwordInput:'[data-cy="password_field"]',
        passwordText:'password',
        logInButton:'[data-cy="submit_button"]'
        
    }
        export const homepage ={
            activeOrders:'.css-fjm612 > :nth-child(1)',
            completedOrders:'.css-fjm612 > :nth-child(2)',
            totalOrders:'.css-fjm612 > :nth-child(3)',
            settingBtn:':nth-child(5) > .css-znfvfr > .css-12hibeq',
            logoutBtn:'.css-1lxqctd > :nth-child(11)',
            viewOrders:'[data-cy="home_orders_card"]',
            viewRiders:'[data-cy="home_riders_card"] > .css-97nj9e',
            viewCustomer:'[data-cy="home_customers_card"] > .css-97nj9e > .css-9b73l5',
            viewAnalytics:'[data-cy="home_analytics_card"] > .css-97nj9e',
            viewSettings:'[data-cy="home_settings_card"] > .css-97nj9e',
            backBtn:'[data-cy="back_button"]',

        }
         export const Orders ={
        ordersField:'[data-cy="search_field"]',
        ordersText:'sarah',
        orderNumber2:':nth-child(1) > .css-1rrif7s > .css-6ofs2y',
        ordersText2:'salami layor',
        orderNumber:':nth-child(2) > .css-4eeanr > .css-1c9cdsy',
        cancelMenu:'.css-y8p3rk',
        cancelOrder:'.css-n8pjgo > :nth-child(1)',
        confirmBtn:'.css-1cmvwd1',
        cancelBtn:'.css-1ymdjg8',
        acceptBtn:'[data-cy="accept_button"]',
        createOrderBtn:'[data-cy="create_button"]',
        pickupBtn:'[href="/orders/create?type=pickup"]',
        filterOrdersBtn:'[data-cy="filter_button"]',
        deliveryAreaField:'#deliveryArea',
        address:'.css-1sglrgv > :nth-child(1)',
        selectSender:'.css-3bkuyv',
        senderName:':nth-child(3) > .css-1cn95xj',
        itemField:'.css-16jxyiy',
        items:'Bags, Shoes',
        allowDescription:'.css-16mupzn',
        descriptionField:'#description',
        description:'Test Flight',
        description2:'Dorime',
        description3:'Ha ha',
        deliveryPaid:'.css-kn2qq8',
        submitRequestBtn:'[data-cy="submit_button"]',
        delivery:'[href="/orders/create?type=delivery"]',
        address2:':nth-child(4) > :nth-child(1) > .css-6ofs2y',
        selectSender2:':nth-child(19) > .css-cy0rp5 > .css-s3axrf',
        items2:'Chocolate',
        items3:'Dress, Watch, Facecap',
        pdOrder:'[href="/orders/create?type=pickup-delivery"]',
        address4:'.css-1sglrgv > :nth-child(4)',
        senderName3:':nth-child(20) > .css-cy0rp5 > .css-s3axrf',
        selectSender4:':nth-child(2) > .css-ht82lz > .css-s43av9 > .css-12hibeq',
        receiverNameF:'.css-3bkuyv',
        selectReceiver:':nth-child(1) > .css-1cn95xj',
        receiverEmailF:':nth-child(3) > [data-cy="form_input"]',
        receiverAddressF:':nth-child(4) > .css-2g5l14 > [data-cy="form_input"]',
        receiverAddtext:'.css-ke7a7 > .css-8p60x1 > :nth-child(4)',
        filterIcon:'.css-othnyl > .css-9b73l5',
        orderStatus:':nth-child(1) > .css-1ku7scz',
        accepted:'[title="Accepted"] > .css-1qjs13q > .css-jwvufj',
        pending:'[title="Pending"] > .css-1qjs13q > .css-jwvufj',
        orderDate:':nth-child(2) > .css-1ow1sgd > .css-1o00jx3 > svg',
        datePicker1:':nth-child(1) > .DayPickerInput > .css-1us341p',
        datePicker2:':nth-child(2) > .DayPickerInput > .css-1us341p',
        date1:'[aria-label="Thu Jan 13 2022"]',
        date2:'[aria-label="Mon Jan 31 2022"]',
        riderdropdown:'[data-cy="form_select"]',
        updateBtn:'.css-1cmvwd1',
        orderAccepted:':nth-child(1) > .css-1vc8b7l',
        pendingOrder:'.css-1yh09yi > :nth-child(2)',
        priceSystem:':nth-child(2) > [data-cy="form_select"]',
        vehicle:':nth-child(8) > [data-cy="form_select"]',
        assignRiderDropdown:':nth-child(9) > [data-cy="form_select"]',

        

         }
        export const Rider ={
            addRiderBtn:'[data-cy="create_button"]',
            nameField:'#name',
            nameText:'Cute Test',
            numberField:'#phoneNumber',
            riderNumber:'81444198323',
            vehicleNumberF:'#vehicleNumber',
            vnumberText:'081234',
            allowSms:'.css-16mupzn > svg',
            saveDetailsBtn:'[data-cy="submit_button"]',
            searchField:'.css-d7j2r5',
            riderName:'Mubarak Salami',
            copyIcon:'.css-16gcrgi > svg.css-9b73l5',
            editIcon:'rect',
            vnumberText2:'Dorime',
            editDetailsBtn:'[data-cy="submit_button"]',
            riderNameF:':nth-child(4) > .css-1vc8b7l > .css-da0lux',
            deactivationToggle:'.css-kn2qq8',
            activationToggle:'.css-1az2ecb'

        }
            export const Customer  ={
            searchField:'[data-cy="search_field"]',
            text:'sarah',
            orderNumber:':nth-child(1) > .css-1cn95xj > :nth-child(1)'


            } 

            export const analytic ={
                order:'.css-1c9cdsy',
                revenue:':nth-child(2) > .css-2mr0zn',
                customer:':nth-child(3) > .css-2mr0zn',
                rider:':nth-child(4) > .css-2mr0zn'


        }
        export const Settings  ={
            changePassword:'.css-1y1wdjs > :nth-child(3)',
            currentPassword:'#currentPassword',
            newPassword:'#newPassword',
            confirmPassword:'#confirmPassword',
            updatePassword:'.css-8n99c8',
            addArea:'.css-8n99c8',
            areaName:'#name',
            areaCovered:'#coverage'




        
            
    








    
}
