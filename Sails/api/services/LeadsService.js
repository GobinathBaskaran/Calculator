/**
 * Inserts the leads fetched from OASys service
 * @param {* The list of leads fetched from OASys} leads 
 */
export async function addLeads(leads) {
    if (!leads)
        throw 'Invalid Leads';

    // // Insert without model
    // let db = sails.getDatastore('mongodb').manager;
    // if (!db)
    //     throw 'Connection Refused!';
    // for (let lead of leads) {
    //     db.collection('PurchasedLeads').insertOne(lead);
    // }

    //// insert with model ORM
    for (let lead of leads) {        
        await sails.models.lead.create(lead).fetch();
    }
}