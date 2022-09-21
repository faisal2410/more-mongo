/**
 * Mongodb Query and Projections operators
 * https://www.mongodb.com/docs/manual/reference/operator/query/
 * 
 * Query and Projections Operations
 * https://www.mongodb.com/docs/manual/tutorial/query-documents/
 * 
 *  
 * 
 * 
 * */
/**
 * Important Commands:
 * 1.db.movies.find({"rating.average":{$gt:7}})
 * 2.db.movies.find({genres:"Drama"}).pretty()  // includes drama in the array
 * 3.db.movies.find({genres:["Drama"]}).pretty() //exact equality that is only drama is included in the array
 * 4.db.movies.find({runtime:{$in:[30,42]}}).pretty()
 * 4.db.movies.find({runtime:{$nin:[30,42]}}).pretty()
 * 5.db.movies.find({"rating.average":{$lt:5}}).count()
 * 6.db.movies.find({$or:[{"rating.average":{$lt:5}},{"rating.average":{$gt:9}}]}).pretty()
 * 7.db.movies.find({$nor:[{"rating.average":{$lt:5}},{"rating.average":{$gt:9}}]}).pretty()
 * 8.db.movies.find({$and:[{"rating.average":{$gt:9}},{genres:"Drama"}]}).pretty()
 * 9.db.movies.find({{"rating.average":{$gt:9}},{genres:"Drama"}}).pretty()
   10.db.movies.find({runtime:$not:{$eq:60}}).count();
   11.db.movies.find({runtime:{$ne:60}}).count();
 * */
   
/**
1.db.users.find({age:{$exists:true}}).count()  //age property exists
2.db.users.find({age:{$exists:true,$gt:30}}).count() // age property exists and age is grater than 30
3.db.users.find({age:{exists:true,$ne:null}}).count() // age property exists and age has value.
4.db.users.find({phone:{$type:"number"}}).count()
4.db.users.find({phone:{$type:"double"}}).count()
4.db.users.find({phone:{$type:["string","double"}}).count()




*/    