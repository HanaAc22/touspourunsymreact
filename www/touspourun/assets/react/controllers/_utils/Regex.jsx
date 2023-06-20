export const validEmail = new RegExp(
<<<<<<< HEAD
    /[a-zA-Z0-9-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,6}$/
);
export const validPassword = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);
export const validConnectPassword = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
=======
    /[a-zA-Z0-9-]+@{1}[a-zA-Z0-9-_]+.[a-zA-Z]{2,6}$/
);
export const validPassword = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/
);
export const validConnectPassword = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
>>>>>>> sarah
);
export const validSiret = new RegExp("^[0-9]{14}$");
export const validZipCode = new RegExp("^[0-9 ]{5}$");
export const validNameRgex = new RegExp("^[a-zA-Z0-9-_ ]{2,25}$");
export const validAdressRgex = new RegExp("^[a-zA-Z0-9- ]{2,255}$");
export const validMsgRgex = new RegExp("^[a-zA-Z0-9-_ '.#?!@$%^&*,\n\r\s\b]{5,550}$");

//Au moins un chiffre. Vous pouvez supprimer cette condition en supprimant (?=.* ?[0-9])
//Au moins un caractère spécial, Vous pouvez supprimer cette condition en supprimant (?=.* ?[#?!@$%^&*-])
//Au moins une lettre minuscule. Vous pouvez supprimer cette condition en supprimant (?=.* ?[a-z])
//Au moins une lettre majuscule. Vous pouvez supprimer cette condition en supprimant (?=.* ?[A-Z])
//Formé d'un minimum de 8 caractères. Ajustez-le en modifiant {8,}