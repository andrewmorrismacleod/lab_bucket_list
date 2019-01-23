use bucket_list;
db.dropDatabase();

db.items.insertMany([
{
  name: "Go to Machu Pichu",
  tagged: "Yes"
},
{
  name: "Play guitar solo",
  tagged: "No"
},
{
  name: "Meet Nessie",
  tagged: "No"
}

])
