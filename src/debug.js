const DEBUG = false

let database_url

//allows for a centralized database url source, and for the url to be changed
// between development and debug setups
if(DEBUG){
  database_url = "http://127.0.0.1:7000/"
} else {
  database_url = "http://127.0.0.1:7000/"
}

export const db_url = database_url

//old db ip "http://73.169.221.60:8000/"