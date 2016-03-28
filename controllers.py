#-*- coding: utf-8 -*-
from openerp import http


class Prod(http.Controller):
    @http.route('/product/product/', auth='public', website=True)
    def produ_index(self, **kw):
        Products = http.request.env['product.template']
        return http.request.render('website_products.produ_index', {
            'products': Products.search([])
        })
