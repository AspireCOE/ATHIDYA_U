<!-- styles start -->
<style>
    span{
        color: lightblue;
        font-weight: bold;
    }
    
</style>
<!-- styles end -->

# MONGO DB

## Creation of db, collection

Connect to shell

```
> mongosh
# open mongodb shell
```

Create a database, collection

```
> use <db-name>
# if db exist it uses/ select it or creates new db

> db.createCollection("collectionName")
# create a collection in the selected db
```

Select Database, collection

```
> show dbs
# shows lsit of databases available

> use <db-name>
# use or select a particular database for usage

> show tables
> show colletions
# shows collection in selected db
```

## CRUD

INSERT

```
> db.collectionName.insertOne({json object})
# insets a single json object into the collection

> db.collectionName.insertMany( [{obj1}, {obj2}, {obj3}] )
# insert many data inside a array list at same time
```

SELECT

```
> db.collectionName.find()
# returns all dsata in collection

> db.collectionName.find().limit(2)
# returns first 2 data

> db.collectionName.findOne()
# return 1 element if query given returns top data or by default returns first data

> db.collectionName.find( $ [ { name : 'aaa'}, { maths : 80 } ] )
# returns all data with name in it as 'aaa'

> db.collectionName.find({}, {name:1})
# returns id of all data in collection and along with it returns only the name in each data

> db.collectionName.find({}, {_id=0, name=1, maths=1})
# selects only name and maths data in each data and since _id=0 it is false and will not show it
```

UPDATE

```
> db.collectionName.updateOne({name:'aaa'}, {$set: {maths:70}})
# where the name is 'aaa' there set maths data as 70

> db.collectionName.updateOne(
    {name:'zzz'},
    { $set : {
        gender: 'male',
        physics: 80,
        maths:90,
        english:75
    }},
    {upsert: true}
)
# this tries to update, if data not present then inserts new data

> db.collectionName.updateMany({}, {$inc: {maths:1}})
# in all data increment ($inc) maths by 1 value
```

DELETE

```
> dbs.collectionName.deleteOne({name:'aaa'})
# delete data where name is 'aaa' / first of selected

> dbs.collectionName.deleteMany({maths: 80})
# delete all data with maths=80
```

## Queries operators

### Comparision

| operator          | equivalent to | Example                                     |
| ----------------- | ------------- | ------------------------------------------- |
| <span>$eq</span>  | ==            | .find( { name : { $eq : 'aaa' } } )         |
| <span>$ne</span>  | !=            | .find( { name : { $ne : 'sss' } } )         |
| <span>$gt</span>  | >             | .find( { maths : { $gt : 80 } } )           |
| <span>$gte</span> | >=            | .find( { maths : { $gte : 80 } } )          |
| <span>$lt</span>  | <             | .find( { maths : { $lt : 80 } } )           |
| <span>$lte</span> | <=            | .find( { maths : { $lte : 80 } } )          |
| <span>$in</span>  | in            | .find( { maths : { $in : [20, 50, 80] } } ) |

### Logical

| operator          | equivalent to | Example                                           |
| ----------------- | ------------- | ------------------------------------------------- |
| <span>$and</span> | &&            | .find( $and [ { name : 'aaa'}, { maths : 80 } ] ) |
| <span>$or</span>  | \|\|          | .find( $or [ { name : 'aaa'}, { maths : 80 } ] )  |
| <span>$nor</span> | ~             |
| <span>$not</span> | !             | .find( $not : { name : 'aaa'} )                   |

### Evaluation

| operator             | equivalent to | Example |
| -------------------- | ------------- | ------- |
| <span>$regex</span>  | ==            |
| <span>$text</span>   | !=            |
| <span>$wheret</span> | >             |

## Aggregation

Aggregation operations allow you to group, sort, perform calculations, analyze data, and much more.

```
> db.collectionName.aggregate( [
    {
        $match : { maths : { $gt : 70 } }
    },
    {
        $group : { _id : "$category", total: {$sum : '$maths'} }
    }
] )
# match the condition maths > 70
# group these data by adding them all by $sum of category '$maths'
```
