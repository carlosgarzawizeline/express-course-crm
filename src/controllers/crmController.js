import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (request, response) => {
    let newContact = new Contact(request.body);
    newContact.save((error, contact) => {
        if (error) {
            response.send(error);
        } else {
            response.json(contact);
        }
    })
}

export const getContacts = (request, response) => {
    Contact.find({}, (error, contact) => {
        if (error) {
            response.send(error);
        } else {
            response.json(contact);
        }
    })
}

export const getContactWithID = (request, response) => {
    Contact.findById(request.params.contactID, (error, contact) => {
        if (error) {
            response.send(error);
        } else {
            response.json(contact);
        }
    })
}

export const updateContact = (request, response) => {
    Contact.findOneAndUpdate({ _id: request.params.contactID }, request.body, { new: true, useFindAndModify: false }, (error, contact) => {
        if (error) {
            response.send(error);
        } else {
            response.json(contact);
        }
    })
}

export const deleteContact = (request, response) => {
    Contact.remove({ _id: request.params.contactID }, (error, contact) => {
        if (error) {
            response.send(error);
        } else {
            response.json({
                message: 'Succesfully deleted contact!'
            });
        }
    })
}