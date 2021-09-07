import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((request, response, next) => {

            // Middleware here
            console.log(`Request from: ${request.originalUrl}`)
            console.log(`Request type: ${request.method}`)

            // Pass to the next function
            next();
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // Get specific contact
        .get(getContactWithID)

        // Update specific contact
        .put(updateContact)

        // Delete specific contact
        .delete(deleteContact)
}

export default routes;