/**
 * LeadsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
import * as oasysService from '../services/OASysService';
import * as leadsService from '../services/LeadsService';
// const oasysService = require('../services/OASysService');
// const leadsService = require('../services/LeadsService');

module.exports = {
    getLeads: async (req, res) => {
        await oasysService.authenticateOASys();
        let leads = await oasysService.fetchOASysLeads();
        // let leads = [{
        //     firstname: 'Test',
        //     lastname: 'Dev',
        //     email: 'test@test.in',
        //     phonenumber: '1234567890'
        // }];
        await leadsService.addLeads(leads);
        return res.ok(leads);
    },

    uploadLeads: async (req, res) => {
        if (!req.body)
            return res.badRequest('Invalid Parameters');
        await leadsService.addLeads(req.body);
        return res.ok(leads);
    }    
};

