﻿module orders {
    'use strict';

    export class OrderComponent implements ng.IComponentOptions {

        public bindings: any;
        public controller: any;
        public templateUrl: any;

        constructor() {
            this.bindings = {};
            this.controller = 'OrdersController';
            this.templateUrl = '/app/orders/orders.template.html';
        }
    }

    angular
        .module('orders')
        .component('orders', new OrderComponent());

}
