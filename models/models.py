# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class pos_owl(models.Model):
#     _name = 'pos_owl.pos_owl'
#     _description = 'pos_owl.pos_owl'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
