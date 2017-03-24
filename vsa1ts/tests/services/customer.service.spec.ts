
module customer.service.tests {
    'use strict';

//    window["ReSharperReporter"].prototype.jasmineDone = () => { };
    

    describe('Customer service tests', () => {

        // local vars
        var cdnPath: string = 'http://northwind.servicestack.net/';
        var customerService: services.ICustomerService;
        var data: any;  // this will be object returned from service call
        var $httpBackend: angular.IHttpBackendService;
		var $q: angular.IQService;


        //Arrange
        beforeEach(() => {

            (angular as any).mock.module('services');

            // Setup any test data or call common routine
            data = {
                "Customers": [
                    {
                        "Id":
                            "ALFKI",
                        "CompanyName":
                            "Alfreds Futterkiste",
                        "ContactName":
                            "Maria Anders",
                        "ContactTitle":
                            "Sales Representative",
                        "Address":
                            "Obere Str. 57",
                        "City":
                            "Berlin",
                        "PostalCode":
                            "12209",
                        "Country":
                            "Germany",
                        "Phone":
                            "030-0074321",
                        "Fax":
                            "030-0076545"
                    },
                    {
                        "Id":
                            "ANATR",
                        "CompanyName":
                            "Ana Trujillo Emparedados y helados",
                        "ContactName":
                            "Ana Trujillo",
                        "ContactTitle":
                            "Owner",
                        "Address":
                            "Avda. de la Constitución 2222",
                        "City":
                            "México D.F.",
                        "PostalCode":
                            "05021",
                        "Country":
                            "Mexico",
                        "Phone":
                            "(5) 555-4729",
                        "Fax":
                            "(5) 555-3745"
                    },
                    {
                        "Id":
                            "ANTON",
                        "CompanyName":
                            "Antonio Moreno Taquería",
                        "ContactName":
                            "Antonio Moreno",
                        "ContactTitle":
                            "Owner",
                        "Address":
                            "Mataderos  2312",
                        "City":
                            "México D.F.",
                        "PostalCode":
                            "05023",
                        "Country":
                            "Mexico",
                        "Phone":
                            "(5) 555-3932"
                    }
                ]
            };

            inject((_CustomerService_, _$httpBackend_, _$q_) => {
                customerService = _CustomerService_;
                $httpBackend = _$httpBackend_;
                $q = _$q_;
            });
        });

        it('getCustomers() returns list of customers from CDN', inject(() => {

            // set path for returned file
            var jsonFile: string = 'customers.json';

            // mock testdata into expected results
            $httpBackend.expectGET(`${cdnPath}${jsonFile}`).respond(202, data);

            customerService.getCustomers().then(response => {
                expect(response).toEqual(data['Customers']);
            });

            $httpBackend.flush();
        }));


    });
}