curl -X POST -H "Authorization: Basic YWRtaW46Y2hhbmdlaXQ=" -H "Content-Type: application/json" -H "ES-EventId: cb9df8cd-be29-4720-9f00-e35d30f10c3b" -H "Cache-Control: no-cache" -H "Postman-Token: a8b1f86c-74d0-55b8-4533-c57fa99b78ef" -d '{
   "$acl" : {
      "$w"  : ["$admins", "knocker"],
      "$r"  : "$all",
      "$d"  : "$admins",
      "$mw" : "$admins",
      "$mr" : "$admins"
   }
}' "http://127.0.0.1:2113/streams/knocker/metadata"
