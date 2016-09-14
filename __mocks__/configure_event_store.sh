# Create knocker user
curl -X POST -H "Content-Type: application/json" -H "Authorization: Basic YWRtaW46Y2hhbmdlaXQ=" -H "Cache-Control: no-cache" -H "Postman-Token: 2edac14e-7067-ab70-690c-9a52d8225510" -d '{"loginName":"knocker","fullName":"Knocker","password":"examplepassphrase","groups":[]}' "http://127.0.0.1:2113/users/"

# Define knocker stream permissions
curl -X POST -H "Authorization: Basic YWRtaW46Y2hhbmdlaXQ=" -H "Content-Type: application/json" -H "ES-EventId: cb9df8cd-be29-4720-9f00-e35d30f10c3b" -H "Cache-Control: no-cache" -H "Postman-Token: 3e842d17-bb15-2d6d-864e-16036c3d3644" -d '{
   "$acl" : {
      "$w"  : ["$admins", "knocker"],
      "$r"  : "$all",
      "$d"  : "$admins",
      "$mw" : "$admins",
      "$mr" : "$admins"
   }
}' "http://127.0.0.1:2113/streams/knocker/metadata"

# Change admin password
curl -X POST -H "Authorization: Basic YWRtaW46Y2hhbmdlaXQ=" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 1e7d536e-f5a7-4eb5-935b-48c131782594" -d '{ "newPassword": "otherexamplepassphrase" }' "http://127.0.0.1:2113/users/admin/command/reset-password"
