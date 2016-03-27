#-*- coding: utf-8 -*-
from openerp import http

class Prod(http.Controller):
    @http.route('/product/product/', auth='public', website=True)
    def index(self, **kw):
        Products = http.request.env['product.template']
        return http.request.render('website_testing.index', {
            'products': Products.search([])
        })
