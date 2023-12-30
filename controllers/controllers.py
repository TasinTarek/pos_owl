# -*- coding: utf-8 -*-
# from odoo import http


# class PosOwl(http.Controller):
#     @http.route('/pos_owl/pos_owl', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pos_owl/pos_owl/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('pos_owl.listing', {
#             'root': '/pos_owl/pos_owl',
#             'objects': http.request.env['pos_owl.pos_owl'].search([]),
#         })

#     @http.route('/pos_owl/pos_owl/objects/<model("pos_owl.pos_owl"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pos_owl.object', {
#             'object': obj
#         })
