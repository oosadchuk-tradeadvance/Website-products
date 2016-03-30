# -*- coding: utf-8 -*-
from openerp import models, fields, api

class Sale_order(models.Model):
    _inherit = "sale.order"
    
    @api.one
    @api.model
    def get_args(self):
        args = self.env['sale.order'].search([])
        
        print args.cr, "HH", args.uid, "HH",args.ids
        return args

    @api.model
    def foo_manipulate_records_1(self):
        """ function returns list of tuples (id,name) """
        return [(i.id,i.name) for i in self]

    @api.model
    def confirm_confirm(self):
        args = self.env['sale.order'].search([])
        
        args[0].action_button_confirm
