const DEBUG = true

let database_url

if(DEBUG){
  database_url = "127.0.0.1:8000"
} else {
  database_url = "127.0.0.1:8000"
}

export const db_url = database_url