db.runCommand( { dropAllUsersFromDatabase: 1, writeConcern: { w: "majority" } } );
db.runCommand(
   {
     dropAllRolesFromDatabase: 1,
     writeConcern: { w: "majority" }
   }
);

db.dropDatabase();

/*Borrar la colección*/
db.coleccion.drop();
/*Ver las restricciones de la colección*/
db.getCollectionInfos({name: "pacientes"});
/*eliminar indices de la bd*/
db.collection.dropIndex({ "encounter_id": 1 });
/*Eliminar la BD*/



use presentacion;
show collections;

db.pacientes.insert([{
  encounter_id : 63763,
  patient_nbr : 114985985,
  race : "Alien",
  gender: "No se sabe",
  name: "Wung-chu"
}]);

db.pacientes.createIndex( { "encounter_id": 1 }, { unique: true } );
show collections;
db.pacientes.createIndex( { "patient_nbr": 1 }, { unique: true } );

db.pacientes.runCommand("collMod", {
  validationLevel: "moderate",
  validationAction: "error"
});

db.pacientes.find().pretty();
db.getCollectionInfos({name: "pacientes"});

/***OTRA FORMA DE CREAR LA COLECCIÓN AL FINAL DEL FICHERO******/
db.pacientes.runCommand("collMod", {
  validator: { $and:
       [
         {$or: [
           {race: { $in: ["Caucasian", "Asian", "African", "American",  "Hispanic", "Other"] } },
           {race: {$exists: false}}
         ]},
         {$or: [
           {gender: {$in: ["Male", "Female", "Unknown/Invalid"]}},
           {gender: {$exists: false}}
         ]},
         {$or: [
           {age: {$in: ["[0-10)", "[10-20)", "[20-30)", "[30-40)", "[40-50)", "[50-60)", "[60-70)", "[70-80)", "[80-90)", "[90-100)"]}},
           {age: {$exists: false}}
         ]},
         {$or: [
           {weight: {$type: "string"}},
           {weight: {$exists: false}}
         ]},
         {$and: [
             {admission_type_id: {$type: "int"}},
             {admission_type_id: {$gte: 0}},
             {admission_type_id: {$lte: 9}},
             {admission_type_id: {$exists: true}}
         ]},
         {$and: [
             {discharge_disposition_id: {$type: "int"}},
             {discharge_disposition_id: {$gte: 0}},
             {discharge_disposition_id: {$lte: 29}},
             {discharge_disposition_id: {$exists: true}}
         ]},
         {$and: [
             {admission_source_id: {$type: "int"}},
             {admission_source_id: {$gte: 0}},
             {admission_source_id: {$lte: 21}},
             {admission_source_id: {$exists: true}}
         ]},
         {$and: [
             {time_in_hospital: {$type: "int"}},
             {time_in_hospital: {$exists: true}}
         ]},
         {$or: [
             {time_in_hospital: {$type: "string"}},
             {time_in_hospital: {$exists: false}}
         ]},
         {$or: [
             {medical_specialty: {$type: "string"}},
             {medical_specialty: {$exists: false}}
         ]},
         {$or: [
             {num_lab_procedures: {$type: "int"}},
             {num_lab_procedures: {$exists: false}}
         ]},
         {$or: [
             {num_procedures: {$type: "int"}},
             {num_procedures: {$exists: false}}
         ]},
         {$or: [
             {num_medications: {$type: "int"}},
             {num_medications: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {number_outpatient: {$type: "int"}},
               {number_outpatient: {$gt: 0}}
           ]},
           {number_outpatient: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {number_emergency: {$type: "int"}},
               {number_emergency: {$gt: 0}}
           ]},
           {number_emergency: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {number_inpatient: {$type: "int"}},
               {number_inpatient: {$gt: 0}}
           ]},
           {number_inpatient: {$exists: false}}
         ]},
         {$or: [
           {number_diagnoses: {$type: "int"}},
           {number_diagnoses: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {A1Cresult: {$type: "int"}},
               {A1Cresult: {$in: ["None", ">8", "Norm", ">7"]}}
           ]},
           {A1Cresult: {$exists: false}}
         ]},
         {$or: [
           {change: {$in: ["No", "Ch"]}},
           {change: {$exists: false}}
         ]},
         {$or: [
           {diabetesMed: {$in: ["Yes", "No"]}},
           {diabetesMed: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {readmitted: {$type: "string"}},
               {readmitted: {$in: ["NO", ">30","<30"]}}
           ]},
           {readmitted: {$exists: false}}
         ]},
         {$or: [
           {metformin: {$in: ["No", "Steady", "Up", "Down"]}},
           {metformin: {$exists: false}}
         ]},
         {$or: [
           {repaglinide: {$in: ["No", "Steady", "Up", "Down"]}},
           {repaglinide: {$exists: false}}
         ]},
         {$or: [
           {nateglinide: {$in: ["No", "Steady", "Up", "Down"]}},
           {nateglinide: {$exists: false}}
         ]},
         {$or: [
           {chlorpropamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {chlorpropamide: {$exists: false}}
         ]},
         {$or: [
           {glimepiride: {$in: ["No", "Steady", "Up", "Down"]}},
           {glimepiride: {$exists: false}}
         ]},
         {$or: [
           {acetohexamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {acetohexamide: {$exists: false}}
         ]},
         {$or: [
           {glipizide: {$in: ["No", "Steady", "Up", "Down"]}},
           {glipizide: {$exists: false}}
         ]},
         {$or: [
           {glyburide: {$in: ["No", "Steady", "Up", "Down"]}},
           {glyburide: {$exists: false}}
         ]},
         {$or: [
           {tolbutamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {tolbutamide: {$exists: false}}
         ]},
         {$or: [
           {pioglitazone: {$in: ["No", "Steady", "Up", "Down"]}},
           {pioglitazone: {$exists: false}}
         ]},
         {$or: [
           {rosiglitazone: {$in: ["No", "Steady", "Up", "Down"]}},
           {rosiglitazone: {$exists: false}}
         ]},
         {$or: [
           {acarbose: {$in: ["No", "Steady", "Up", "Down"]}},
           {acarbose: {$exists: false}}
         ]},
         {$or: [
           {miglitol: {$in: ["No", "Steady", "Up", "Down"]}},
           {miglitol: {$exists: false}}
         ]},
         {$or: [
           {troglitazone: {$in: ["No", "Steady", "Up", "Down"]}},
           {troglitazone: {$exists: false}}
         ]},
         {$or: [
           {tolazamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {tolazamide: {$exists: false}}
         ]},
         {$or: [
           {examide: {$in: ["No", "Steady", "Up", "Down"]}},
           {examide: {$exists: false}}
         ]},
         {$or: [
           {insulin: {$in: ["No", "Steady", "Up", "Down"]}},
           {insulin: {$exists: false}}
         ]},
         {$or: [
           {"glyburide-metformin": {$in: ["No", "Steady", "Up", "Down"]}},
           {"glyburide-metformin": {$exists: false}}
         ]},
         {$or: [
           {"glipizide-metformin": {$in: ["No", "Steady", "Up", "Down"]}},
           {"glipizide-metformin": {$exists: false}}
         ]},
         {$or: [
           {"glimepiride-pioglitazone": {$in: ["No", "Steady", "Up", "Down"]}},
           {"glimepiride-pioglitazone": {$exists: false}}
         ]},
         {$or: [
           {"metformin-rosiglitazone": {$in: ["No", "Steady", "Up", "Down"]}},
           {"metformin-rosiglitazone": {$exists: false}}
         ]},
         {$or: [
           {"metformin-pioglitazone": {$in: ["No", "Steady", "Up", "Down"]}},
           {"metformin-pioglitazone": {$exists: false}}
         ]}
      ]
   }
});

/*Ahora no deja insertar un documento que no cumple la regla*/
db.pacientes.insert([{
  encounter_id : 63764,
  patient_nbr : 114985986,
  race : "Alien",
  gender: "No se sabe",
  name: "Wung-chu"
}]);

db.pacientes.remove({race: "Alien"});


db.pacientes.runCommand("collMod", {
  validationLevel: "moderate",
  validationAction: "warn"
});

/*Una vez cargada la validación de documentos pasamos a cargar los datos del data-set*/
mongoimport --db presentacion --collection pacientes --type csv --headerline --ignoreBlanks --file clean.csv

/*Para exportar a JSON*/
mongoexport --db diabetes --collection pacientes --out pacientes_diabetes.json

/********************************************************PARTE DE SEGURIDAD*****************************************/
db.runCommand( { dropAllUsersFromDatabase: 1, writeConcern: { w: "majority" } } );
db.runCommand(
   {
     dropAllRolesFromDatabase: 1,
     writeConcern: { w: "majority" }
   }
);
/*Mostrar usuarios de la BD*/
db.runCommand({usersInfo: 1, showCredentials: true});
/*Borrar usuario de la BD*/
db.removeUser(username);
/*Mostrar roles*/
db.getRoles();
/*Borrar roles con mensaje de log*/
db.runCommand(
   {
     dropRole: "readPrices",
     writeConcern: { w: "majority" }
   }
);

db.createRole(
   {
     role: "usuario",
     privileges: [
       { resource: { db: "presentacion", collection: "pacientes" }, actions: ["find", "changeOwnPassword"] }
     ],
     roles: [{ role: "read", db: "presentacion"}]
   }
);

db.createRole(
   {
     role: "doctor",
     privileges: [
       { resource: { db: "presentacion", collection: "pacientes" }, actions: [ "find", "insert", "update", "remove", "changeOwnPassword" ] }
     ],
     roles: [
       { role: "readWrite", db: "presentacion"}
     ]
   }
);

db.createRole(
   {
     role: "administrador",
     privileges: [
       { resource: { db: "presentacion", collection: "pacientes" }, actions: [ "createCollection", "dbStats", "collStats",
                  "compact", "repairDatabase", "bypassDocumentValidation",
                 "changePassword", "createCollection", "createIndex", "createRole", "createUser",
                 "dropCollection", "dropUser", "dropRole", "grantRole", "revokeRole", "viewRole", "viewUser",
                 "storageDetails", "getLog", "listDatabases", "listCollections" ] }
     ],
     roles: [
       { role: "usuario", db: "presentacion" },
       { role: "readWrite", db: "presentacion"}
     ]
   }
);

db.createUser({ user: "admin1", pwd: "12345", roles: [ "administrador" ]});
db.createUser({ user: "doc1", pwd: "12345", customData: { Nombre: "Jorge", Apellidos: "Espinosa" }, roles: [ "doctor" ]});
db.createUser({ user: "user1", pwd: "12345", customData: { Nombre: "Vicent" }, roles: [ "usuario" ]});

mongod --auth

mongo -u "user1" -p "12345" --authenticationDatabase "presentacion"

db.pacientes.find({"_id": ObjectId("591cd48dce7252f78c48289e")}).pretty();
db.pacientes.update({"_id": ObjectId("591d530cbdc424839c3a6f0f")}, {$set:{gender:"Male"}});







































/***La otra opción, crear la colección antes de los índices****/
db.createCollection("pacientes", {
  validator: { $and:
       [
         {$or: [
           {race: { $in: ["Caucasian", "Asian", "African", "American",  "Hispanic", "Other"] } },
           {race: {$exists: false}}
         ]},
         {$or: [
           {gender: {$in: ["Male", "Female", "Unknown/Invalid"]}},
           {gender: {$exists: false}}
         ]},
         {$or: [
           {age: {$in: ["[0-10)", "[10-20)", "[20-30)", "[30-40)", "[40-50)", "[50-60)", "[60-70)", "[70-80)", "[80-90)", "[90-100)"]}},
           {age: {$exists: false}}
         ]},
         {$or: [
           {weight: {$type: "string"}},
           {weight: {$exists: false}}
         ]},
         {$and: [
             {admission_type_id: {$type: "int"}},
             {admission_type_id: {$gte: 0}},
             {admission_type_id: {$lte: 9}},
             {admission_type_id: {$exists: true}}
         ]},
         {$and: [
             {discharge_disposition_id: {$type: "int"}},
             {discharge_disposition_id: {$gte: 0}},
             {discharge_disposition_id: {$lte: 29}},
             {discharge_disposition_id: {$exists: true}}
         ]},
         {$and: [
             {admission_source_id: {$type: "int"}},
             {admission_source_id: {$gte: 0}},
             {admission_source_id: {$lte: 21}},
             {admission_source_id: {$exists: true}}
         ]},
         {$and: [
             {time_in_hospital: {$type: "int"}},
             {time_in_hospital: {$exists: true}}
         ]},
         {$or: [
             {time_in_hospital: {$type: "string"}},
             {time_in_hospital: {$exists: false}}
         ]},
         {$or: [
             {medical_specialty: {$type: "string"}},
             {medical_specialty: {$exists: false}}
         ]},
         {$or: [
             {num_lab_procedures: {$type: "int"}},
             {num_lab_procedures: {$exists: false}}
         ]},
         {$or: [
             {num_procedures: {$type: "int"}},
             {num_procedures: {$exists: false}}
         ]},
         {$or: [
             {num_medications: {$type: "int"}},
             {num_medications: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {number_outpatient: {$type: "int"}},
               {number_outpatient: {$gt: 0}}
           ]},
           {number_outpatient: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {number_emergency: {$type: "int"}},
               {number_emergency: {$gt: 0}}
           ]},
           {number_emergency: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {number_inpatient: {$type: "int"}},
               {number_inpatient: {$gt: 0}}
           ]},
           {number_inpatient: {$exists: false}}
         ]},
         {$or: [
           {number_diagnoses: {$type: "int"}},
           {number_diagnoses: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {A1Cresult: {$type: "int"}},
               {A1Cresult: {$in: ["None", ">8", "Norm", ">7"]}}
           ]},
           {A1Cresult: {$exists: false}}
         ]},
         {$or: [
           {change: {$in: ["No", "Ch"]}},
           {change: {$exists: false}}
         ]},
         {$or: [
           {diabetesMed: {$in: ["Yes", "No"]}},
           {diabetesMed: {$exists: false}}
         ]},
         {$or: [
           {$and: [
               {readmitted: {$type: "string"}},
               {readmitted: {$in: ["NO", ">30","<30"]}}
           ]},
           {readmitted: {$exists: false}}
         ]},
         {$or: [
           {metformin: {$in: ["No", "Steady", "Up", "Down"]}},
           {metformin: {$exists: false}}
         ]},
         {$or: [
           {repaglinide: {$in: ["No", "Steady", "Up", "Down"]}},
           {repaglinide: {$exists: false}}
         ]},
         {$or: [
           {nateglinide: {$in: ["No", "Steady", "Up", "Down"]}},
           {nateglinide: {$exists: false}}
         ]},
         {$or: [
           {chlorpropamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {chlorpropamide: {$exists: false}}
         ]},
         {$or: [
           {glimepiride: {$in: ["No", "Steady", "Up", "Down"]}},
           {glimepiride: {$exists: false}}
         ]},
         {$or: [
           {acetohexamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {acetohexamide: {$exists: false}}
         ]},
         {$or: [
           {glipizide: {$in: ["No", "Steady", "Up", "Down"]}},
           {glipizide: {$exists: false}}
         ]},
         {$or: [
           {glyburide: {$in: ["No", "Steady", "Up", "Down"]}},
           {glyburide: {$exists: false}}
         ]},
         {$or: [
           {tolbutamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {tolbutamide: {$exists: false}}
         ]},
         {$or: [
           {pioglitazone: {$in: ["No", "Steady", "Up", "Down"]}},
           {pioglitazone: {$exists: false}}
         ]},
         {$or: [
           {rosiglitazone: {$in: ["No", "Steady", "Up", "Down"]}},
           {rosiglitazone: {$exists: false}}
         ]},
         {$or: [
           {acarbose: {$in: ["No", "Steady", "Up", "Down"]}},
           {acarbose: {$exists: false}}
         ]},
         {$or: [
           {miglitol: {$in: ["No", "Steady", "Up", "Down"]}},
           {miglitol: {$exists: false}}
         ]},
         {$or: [
           {troglitazone: {$in: ["No", "Steady", "Up", "Down"]}},
           {troglitazone: {$exists: false}}
         ]},
         {$or: [
           {tolazamide: {$in: ["No", "Steady", "Up", "Down"]}},
           {tolazamide: {$exists: false}}
         ]},
         {$or: [
           {examide: {$in: ["No", "Steady", "Up", "Down"]}},
           {examide: {$exists: false}}
         ]},
         {$or: [
           {insulin: {$in: ["No", "Steady", "Up", "Down"]}},
           {insulin: {$exists: false}}
         ]},
         {$or: [
           {"glyburide-metformin": {$in: ["No", "Steady", "Up", "Down"]}},
           {"glyburide-metformin": {$exists: false}}
         ]},
         {$or: [
           {"glipizide-metformin": {$in: ["No", "Steady", "Up", "Down"]}},
           {"glipizide-metformin": {$exists: false}}
         ]},
         {$or: [
           {"glimepiride-pioglitazone": {$in: ["No", "Steady", "Up", "Down"]}},
           {"glimepiride-pioglitazone": {$exists: false}}
         ]},
         {$or: [
           {"metformin-rosiglitazone": {$in: ["No", "Steady", "Up", "Down"]}},
           {"metformin-rosiglitazone": {$exists: false}}
         ]},
         {$or: [
           {"metformin-pioglitazone": {$in: ["No", "Steady", "Up", "Down"]}},
           {"metformin-pioglitazone": {$exists: false}}
         ]}
      ]
   }
});
