module.exports = {
    port: process.env.PORT,
    local_client_url: process.env.LOCAL_CLIENT_URL,
    remote_client_url: process.env.REMOTE_CLIENT_URL,
    allowedDomains: (process.env.NODE_ENV === "production" ?  
    [ process.env.REMOTE_CLIENT_URL, 
        process.env.REMOTE_SERVEUR_URL
    ] : 
    [ process.env.LOCAL_CLIENT_URL,
         process.env.LOCAL_SERVER_URL
        ]
         ) 
}