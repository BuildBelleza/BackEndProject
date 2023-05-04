function setMainView(view){
    return {
     footer: 'partials/footer',
     header: 'partials/header',
     main: 'partials/main/${view}'
    } ;
 };
 
 module.export = { setMainView };